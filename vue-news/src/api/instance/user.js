import { user } from './index-instance.ts';

export function fetchUser(id) {
    return user.get(id);
}
