import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Permissions } from 'src/common/decorators/permissions.decorator';
import { PermissionGuard } from 'src/auth/permission.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('admin')
  @Permissions('find:users') // กำหนดสิทธิ์การเข้าถึง
  @UseGuards(JwtAuthGuard, PermissionGuard) // ผู้ใช้ที่เข้าสู่ระบบเท่านั้นที่เข้าถึงได้
  findAll() {
    return 'This route is restricted to admin only!';
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard) // ผู้ใช้ที่เข้าสู่ระบบเท่านั้นที่เข้าถึงได้
  getProfile() {
    return 'This route is for logged-in users!';
  }
}
