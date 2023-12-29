import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skWTcP38dCRM3PFFnZkiacAAluEU2Khqca3aoA9siTz5VQ3GAoYDPUHzEICEEF3PAbDlyOdBwubJZDa1633HbYJvDm2AMvH62yAqyKzQ1qISrfC8DnYzvsbKgdHqmmLf6fkYeLUsuLaJyABPCC7bI3T29ggHbHFGVvhItHDICp7EMYw9J9RD",
})
