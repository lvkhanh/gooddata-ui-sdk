// (C) 2007-2018 GoodData Corporation
import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";

import { Ldm } from "../../ldm";

const style = { height: 300 };
// TODO: SDK8 Decide whether add dimesion prop to InsightView
// const insightViewProps = {
//     custom: {
//         drillableItems: [],
//     },
//     dimensions: {
//         height: 300,
//     },
// };

export const InsightViewBarByIdentifierExample: React.FC = () => {
    return (
        <div style={style} className="s-insightView-bar">
            <InsightView insight={Ldm.Insights.BarChart} />
        </div>
    );
};
