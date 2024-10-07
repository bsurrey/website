import { WorkExperience } from '@/lib/types'
import { getImageUrl } from '@/utils/helper'

const workExperiences: WorkExperience[] = [
  {
    name: 'Exxeta AG',
    role: 'Full-Stack-Engineer',
    time: 'Feb. 2024 - now',
    logo: getImageUrl('exxeta.png'),
  },
  {
    name: 'Workwise GmbH',
    role: 'Back-End-Engineer',
    time: 'Aug. 2022 - Jan. 2024 ',
    logo: getImageUrl('workwise-logo.png'),
  },
  {
    name: 'nova GmbH',
    role: 'Full-Stack-Engineer',
    time: 'Sep. 2019 - Jul. 2022',
    logo: getImageUrl('nova.jpeg'),
  },
  {
    name: 'celanio GmbH',
    role: 'Apprenticeship',
    time: 'Sep. 2016 - Aug. 2019',
    logo: getImageUrl('celanio.png'),
  },
]

export default workExperiences
