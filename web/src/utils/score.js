const scoreAll = results => {
    const scores = rs.map(results => score(r));

    const validScores = scores.filter(s => Object.keys(s).length && s.max > 0)

    const relative = validScores
        .map(s => s.relative)
        .reduce((sum, current) => sum + current, 0) / validScores.length

    return {
        scores,
        overall: {
            relative,
            percentage: (relative * 100).toFixed(1)
        }
    };
}

const score = r => {
    const scoring = formTypes[r.type].scoring;

    if (!Object.keys(scoring).length) {
        return {};
    }

    let maxScore = 0;
    let reachedScore = 0;

    for (indicator in scoring) {
        if (indicator === 'post') {
            // skip post
            continue;
        }
        if (scoring[indicator].not_applicable && evaluateConditionInContext(scoring[indicator].not_applicable, r)) {
            continue;
        }

        maxScore += scoring[indicator].max;

        switch (scoring[indicator].op) {
            case "sum":
                reachedScore += scoring[indicator].points
                    .filter(p => evaluateConditionInContext(p.condition, r))
                    .reduce((sum, next) => sum + next.value, 0);
                break;
            case "select":
                reachedScore += (scoring[indicator].points.find(p => evaluateConditionInContext(p.condition, r)) || { value: 0 }).value;
                break;
            default:
                break;
        }


    }

    if (scoring.post) {
        scoring.post.forEach(transformation => {
            if (evaluateConditionInContext(transformation.condition, r)) {
                console.log(transformation.factor)
                reachedScore *= transformation.factor;
            }
        })
    }

    return {
        max: maxScore,
        score: reachedScore,
        relative: reachedScore / maxScore,
        percentage: ((reachedScore / maxScore) * 100).toFixed(1)
    }
}
