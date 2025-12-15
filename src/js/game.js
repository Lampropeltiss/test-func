export function healthLevel(mob) {
    if (mob.health > 50) { return 'healthy'}
    if (mob.health > 14) { return 'wounded'}
    return 'critical';
}
