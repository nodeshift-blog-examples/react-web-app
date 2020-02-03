export function getIconCSS(iconId, color, size) {    
    var iconColor = iconId === "icon-slack" ? "" : ' tdsm-' + color;     
    var iconSize = ' icon-' + (size ? size : '32');
    return iconId + iconColor + iconSize;
}

/**
 * Return a new array containing all elements of data input array where searchTag found in its list of tags.
 * @param {*} data 
 * @param {*} searchTag 
 */
export function filterDataByTag(data, searchTag) {
    var filterTiles = [];
    if (searchTag && data && data.length > 0) {
        data.map((t) => {
            var tagValues = t.tags ? t.tags : t.tag;
            return tagValues ? tagValues.forEach((tag) => {
                if (tag.toLowerCase() === searchTag)
                    filterTiles.push(t);
            }) : {};
        });
    }
    return filterTiles;
}
