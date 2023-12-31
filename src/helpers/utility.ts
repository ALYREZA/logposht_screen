import curry from "lodash/curry"
import _map from "lodash/map"
import sumBy from "lodash/sumBy"
import groupBy from "lodash/groupBy"
import isNaN from "lodash/isNaN"
import isFinite from "lodash/isFinite"
import type {Dictionary } from "lodash"
import type{ ILogposht } from "../@types/logposht";
import BigNumber from "bignumber.js";

type GroupResult = {keys: string[], grouped: Dictionary<ILogposht[]>}

const filter = curry(function (ary: ILogposht[], f: (item: ILogposht) => boolean): ILogposht[] | [] {
    return ary.filter(f);
});

const map = curry(function( path:string, ary:ILogposht[]) {
    return _map(ary, path);
});

const sum = curry(function( path:string, ary:ILogposht[]) {
    return sumBy(ary, path);
});

const group = curry(function (ary: ILogposht[], path: string): GroupResult {
    const grouped = groupBy(ary, path)

    return {keys: Object.keys(grouped), grouped}
 })

const thousandSeparator = (number: string|number) => BigNumber(number).toFormat();

const percentage = curry(function (total: number, amount: number): string {
    const percentage = parseFloat(BigNumber(amount).dividedBy(total).multipliedBy(100).toFixed(1));
    const finite = isFinite(percentage) ? percentage + "%" : BigNumber(amount).abs().toFormat();
    const result = isNaN(percentage) ? ":(" :  finite
    return result
})

export { filter,map,sum, thousandSeparator,percentage, group}