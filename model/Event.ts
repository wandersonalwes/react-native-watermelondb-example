import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export class Event extends Model {
  static table = 'events'

  // @ts-ignore
  @field('name') name!: string
  // @ts-ignore
  @field('date') date!: number
}
