module.export.AysncWrapper = function AcctionWrapper(fn) {
    return (req, res, next) => {
        return fn(req, res).catch(next);
    };
};
