export async function use(config, ...packs) {

    const pool = [];

    const ps = await Promise.all(packs.map(async pack => {
        const response = await fetch("../packs/" + pack + ".json");
        return response.json();
    }));

    ps.forEach(p => pool.push(...p.elements));

    let versions = {};

    ps.forEach(pack => versions[pack.prefix] = pack.version);

    let scoringInfos = {}

    ps.forEach(pack => scoringInfos = { ...scoringInfos, ...pack.scoring })

    return {
        title: ps[0].title,
        versions,
        scoring: scoringInfos,
        pool,
        config
    };
}

export function pick(combinedPack, ...ids) {
    return {
        title: combinedPack.title,
        versions: combinedPack.versions,
        scoring: combinedPack.scoring,
        config: combinedPack.config,
        elements: ids.length <= 0 ? combinedPack.pool : ids.map(id => combinedPack.pool.find(item => item.id === id))
    };
}

export function pickByPrefix(combinedPack, prefix) {
    return {
        title: combinedPack.title,
        versions: combinedPack.versions,
        scoring: combinedPack.scoring,
        config: combinedPack.config,
        elements: combinedPack.pool.filter(item => item.id.startsWith(prefix))
    };
}

export function pickByCondition(combinedPack, condition) {
    return {
        title: combinedPack.title,
        scoring: combinedPack.scoring,
        config: combinedPack.config,
        elements: combinedPack.pool.filter(item => condition(item))
    };
}

export function pickExclude(combinedPack, ...ids) {
    return pickByCondition(combinedPack, item => !ids.includes(item.id));
}