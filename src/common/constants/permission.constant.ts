export const PERMISSIONS = {
  // User Permissions
  CREATE_USER: 'create-user',
  EDIT_USER: 'edit-user',
  DELETE_USER: 'delete-user',
  VIEW_USER: 'view-user',

  // Post Permissions
  CREATE_POST: 'create-post',
  EDIT_POST: 'edit-post',
  DELETE_POST: 'delete-post',
  VIEW_POST: 'view-post',

  // Role Permissions
  CREATE_ROLE: 'create-role',
  EDIT_ROLE: 'edit-role',
  DELETE_ROLE: 'delete-role',
  VIEW_ROLE: 'view-role',
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
