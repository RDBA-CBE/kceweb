'use client'

export default function OrgChart() {
  const team = [
    {
      level: 'CEO',
      members: [
        {
          name: 'John Anderson',
          role: 'Chief Executive Officer',
          img: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
      ]
    },
    {
      level: 'Managers',
      members: [
        {
          name: 'Sarah Williams',
          role: 'Product Manager',
          img: 'https://randomuser.me/api/portraits/women/44.jpg'
        },
        {
          name: 'Alex Johnson',
          role: 'Tech Lead',
          img: 'https://randomuser.me/api/portraits/men/46.jpg'
        }
      ]
    },
    {
      level: 'Team',
      members: [
        {
          name: 'Emma Brown',
          role: 'Frontend Developer',
          img: 'https://randomuser.me/api/portraits/women/65.jpg'
        },
        {
          name: 'Michael Chen',
          role: 'Backend Developer',
          img: 'https://randomuser.me/api/portraits/men/75.jpg'
        },
        {
          name: 'Olivia Martin',
          role: 'UI Designer',
          img: 'https://randomuser.me/api/portraits/women/68.jpg'
        },
        {
          name: 'Daniel Park',
          role: 'QA Engineer',
          img: 'https://randomuser.me/api/portraits/men/82.jpg'
        }
      ]
    }
  ]

  return (
    <div className="container py-5">
    

      {team.map((group, index) => (
        <div key={index} className="org-level">

          <h5 className="text-center text-muted mb-4">
            {group.level}
          </h5>

          <div className="row justify-content-center g-4">
            {group.members.map((person, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3">
                <div className="org-card text-center">
                  <img src={person.img} alt={person.name} />
                  <h6 className="mt-3 mb-1">{person.name}</h6>
                  <p>{person.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Dashed Connector */}
          {index !== team.length - 1 && (
            <div className="org-connector"></div>
          )}
        </div>
      ))}
    </div>
  )
}
