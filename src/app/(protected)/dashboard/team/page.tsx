import { getTeamMembers } from '@/actions/supabase'
import { TeamMemberTable } from '@/components/tables/team-members-table'
import React from 'react'

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  console.log(teamMembers)




  return (
      <div>
        <TeamMemberTable teamMembers={teamMembers} />

      </div>


  )
}
