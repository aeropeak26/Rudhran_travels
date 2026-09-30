const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Must match the .env.local string
const MONGODB_URI = 'mongodb://madurairudhrantravels_db_user:PBMJ7XERFxhbEdo9@ac-s98m27a-shard-00-00.um8ih4n.mongodb.net:27017,ac-s98m27a-shard-00-01.um8ih4n.mongodb.net:27017,ac-s98m27a-shard-00-02.um8ih4n.mongodb.net:27017/test?ssl=true&authSource=admin&replicaSet=atlas-131nll-shard-0&appName=mrt';

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

    const email = 'madurairudhrantravels@gmail.com';
    const password = 'Madurairudhran@1';
    const name = 'Admin User';

    const existingUser = await AdminUser.findOne({ email });
    if (existingUser) {
      console.log('User already exists');
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    await AdminUser.create({ email, passwordHash, name, role: 'admin' });
    console.log(`Admin user seeded successfully. Email: ${email}`);
    
  } catch (err) {
    console.error('Error seeding DB:', err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

seed();
