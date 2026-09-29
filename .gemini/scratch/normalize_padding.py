import os, re

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    def replacer(match):
        pre = match.group(1)
        class_str = match.group(2)
        
        # Remove all large vertical paddings/margins
        class_str = re.sub(r'\b(p[ybt]-|m[ybt]-)(\d+)\b', lambda m: '' if int(m.group(2)) >= 8 else m.group(0), class_str)
        
        # Remove any lingering md:py-*, lg:py-* etc. for the large paddings
        class_str = re.sub(r'\b(?:sm|md|lg|xl):(?:p[ybt]-|m[ybt]-)(\d+)\b', lambda m: '' if int(m.group(1)) >= 8 else m.group(0), class_str)
        
        class_str = re.sub(r'\s+', ' ', class_str).strip()
        class_str = 'py-12 md:py-16 ' + class_str
        return f'{pre}className="{class_str.strip()}"'

    new_content = re.sub(r'(<section[^>]*?\s+)className="([^"]+)"', replacer, content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated {filepath}')

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            process_file(os.path.join(root, file))
print('Done')
