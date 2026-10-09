import re

path = 'src/app/admin/(protected)/tour-packages/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(
    r'<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">\s*<button\s*onClick=\{\(\) => handleToggleHome\(p\)\}\s*className=\{`mr-4 \$\{p\.showOnHome \? \'text-orange-600 hover:text-orange-900\' : \'text-slate-300 hover:text-orange-500\'\}`\}\s*title=\{p\.showOnHome \? \'Remove from Home\' : \'Show on Home\'\}\s*>\s*<Home className="w-4 h-4 inline"\/>\s*<\/button>\s*<button onClick=\{\(\) => handleOpenForm\(p\)\} className="text-indigo-600 hover:text-indigo-900 mr-4"><Edit2 className="w-4 h-4 inline"\/><\/button>\s*<button onClick=\{\(\) => handleDeletePkg\(p\._id\)\} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4 inline"\/><\/button>\s*<\/td>',
    re.MULTILINE
)

replacement = """<td className="px-6 py-4 whitespace-nowrap text-center">
                        <button
                          onClick={() => handleToggleHome(p)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${p.showOnHome ? 'bg-emerald-500' : 'bg-gray-200'}`}
                          title={p.showOnHome ? 'Remove from Home' : 'Show on Home'}
                        >
                          <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${p.showOnHome ? 'translate-x-6' : 'translate-x-1'}`} />
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button onClick={() => handleOpenForm(p)} className="text-indigo-600 hover:text-indigo-900 mr-4"><Edit2 className="w-4 h-4 inline"/></button>
                        <button onClick={() => handleDeletePkg(p._id)} className="text-red-600 hover:text-red-900"><Trash2 className="w-4 h-4 inline"/></button>
                      </td>"""

new_content, count = pattern.subn(replacement, content)
print(f"Replaced {count} instances.")

with open(path, 'w', encoding='utf-8') as f:
    f.write(new_content)
