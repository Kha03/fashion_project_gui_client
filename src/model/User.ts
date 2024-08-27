export interface UserModel {
  userID: string
  username: string
  password: string
  roleDto: RoleDto
  infoUserDto: InfoUserDto
}
export interface RoleDto {
  roleID: string
  roleName: string
  type: string
}
export interface InfoUserDto {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  createdDate: string
  image: string
}
export interface requestLogin {
  username: string
  password: string
}
