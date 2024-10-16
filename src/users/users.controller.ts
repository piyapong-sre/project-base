import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('admin')
  @Roles('admin') // กำหนดให้เฉพาะ role 'admin' เท่านั้นที่เข้าถึงได้
  @UseGuards(JwtAuthGuard, RolesGuard)
  findAll() {
    return 'This route is restricted to admin only!';
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard) // ผู้ใช้ที่เข้าสู่ระบบเท่านั้นที่เข้าถึงได้
  getProfile() {
    return 'This route is for logged-in users!';
  }
}
