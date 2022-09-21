import GridEntity from "../../entities/singleEntity/gridEntity";
import {MediaContextAtom} from "../browseContext";
import style from "./Style.module.css";
import useOnScroll from "../../../../utils/opacityScroll";
import {useRecoilValue} from "recoil";
import {memo} from "react";

export const Grid = memo(() => {
    const data = useRecoilValue(MediaContextAtom);
    const {navDark} = useOnScroll();

    return (
        <>
            <div className={style.bck} style={navDark ? {display: "block"} : {}}/>
            <div className={style.gridHolder}>
                {data.map(item =>
                    <GridEntity key={item.id} {...item} />
                )}
            </div>
        </>
    )
});
