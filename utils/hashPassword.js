import bcrypt from "bcrypt"

const hashPassword = async function (password) {
    const hashPass = await bcrypt.hash(password, 10);
    return hashPass;
}
export default hashPassword;