type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}

//classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pgn'])
// по итогу должно получиться 'remove-btn hovered selectable pgn' - типа все что мы написали добавляется и получается куча классов, записанных в одном месте