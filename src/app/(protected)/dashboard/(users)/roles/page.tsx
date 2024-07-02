import { getRoles } from '@/actions/supabase';
import { RoleTable } from '@/components/tables/roles/roles-table'
import React from 'react'

export default async  function page() {
  const roles = await getRoles();



  return (
    <RoleTable Roles={roles} />
  )
}
