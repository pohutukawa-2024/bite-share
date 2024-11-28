export interface ProfileDraft {
  username: string | undefined
  full_name: string | undefined
  email: string | undefined
  points: number | undefined
  location: string | undefined
}

export interface Profile extends ProfileDraft {
  id: string
}
