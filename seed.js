const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Must match the .env.local string
const MONGODB_URI = 'mongodb+srv://madurairudhrantravels_db_user:PBMJ7XERFxhbEdo9@mrt.um8ih4n.mongodb.net/?appName=mrt';

const AdminUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, default: 'admin' },
}, { timestamps: true });

const AdminUser = mongoose.models.AdminUser || mongoose.model('AdminUser', AdminUserSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const email = 'admin@rudhrantravels.com';
    const password = 'admin';
    const name = 'Admin User';

    const existingUser = await AdminUser.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await AdminUser.create({ email, passwordHash, name, role: 'admin' });
    console.log('Admin user seeded successfully. Email: admin@rudhrantravels.com, Password: admin');
    
  } catch (err) {
    console.error('Error seeding DB:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
