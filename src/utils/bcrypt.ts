import bcrypt from 'bcrypt';

class BcryptService {
  static async hash(password: string): Promise<string> {
    let salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  static async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}

export default BcryptService;
