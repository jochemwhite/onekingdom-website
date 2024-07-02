import { getPermissions } from '@/actions/supabase'
import React from 'react'

interface PermissionCardProps {
  role_id: number
}

export default async function PermissionCard({ role_id}: PermissionCardProps) {
  
  const permission = await getPermissions() 



  return (
    <div className='bg-white'>permission-card</div>
  )
}
