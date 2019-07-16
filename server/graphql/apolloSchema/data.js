const eqpStatusList = [
        "Amaranth",
        "Amber",
        "Amethyst",
        "Apricot",
        "Aquamarine",
        "Azure",
        "Baby",
        "Beige",
        "Black",
        "Blue",
        "Blue-Green",
        "Blue-Violet",
        "Blush",
        "Bronze",
        "Brown",
        "Burgundy",
        "Byzantium",
        "Carmine",
        "Cerise",
        "Chocolate",
        "Cobalt",
        "Coffee",
        "Copper",
        "Coral",
        "Crimson"
    ];
module.exports.eqpStatusList = eqpStatusList;

const eqpStatusData = eqpStatusList.map(status=>{
    return {
        displayName: status,
        EQPStatus: status,
    }
})
module.exports.eqpStatusData = eqpStatusData;