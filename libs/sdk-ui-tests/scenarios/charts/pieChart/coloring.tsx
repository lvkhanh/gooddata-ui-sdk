// (C) 2007-2019 GoodData Corporation
import { scenariosFor } from "../../../src";
import { PieChart, HeaderPredicateFactory, IPieChartProps } from "@gooddata/sdk-ui";
import { coloringCustomizer } from "../_infra/coloringVariants";
import { BlackColor, CustomColorPalette, RedColor, CustomPaletteColor } from "../../_infra/colors";
import { measureLocalId } from "@gooddata/sdk-model";
import { ReferenceLdm } from "@gooddata/reference-workspace";
import { PieChartWithSingleMeasureAndViewBy, PieChartWithTwoMeasures } from "./base";
import { AttributeElements } from "../../_infra/predicates";

const colorsAndPalette = scenariosFor<IPieChartProps>("PieChart", PieChart)
    .withVisualTestConfig({ groupUnder: "coloring" })
    .withDefaultTags("vis-config-only", "mock-no-scenario-meta")
    .addScenarios("", PieChartWithSingleMeasureAndViewBy, coloringCustomizer);

const colorAssignment = scenariosFor<IPieChartProps>("PieChart", PieChart)
    .withDefaultTags("vis-config-only", "mock-no-scenario-meta")
    .addScenario("assign color to measures", {
        ...PieChartWithTwoMeasures,
        config: {
            colorPalette: CustomColorPalette,
            colorMapping: [
                {
                    predicate: HeaderPredicateFactory.localIdentifierMatch(
                        measureLocalId(ReferenceLdm.Amount),
                    ),
                    color: BlackColor,
                },
                {
                    predicate: HeaderPredicateFactory.localIdentifierMatch(measureLocalId(ReferenceLdm.Won)),
                    color: CustomPaletteColor,
                },
            ],
        },
    })
    .addScenario("assign color to attributes", {
        ...PieChartWithSingleMeasureAndViewBy,
        config: {
            colorPalette: CustomColorPalette,
            colorMapping: [
                {
                    predicate: AttributeElements.Product.WonderKid,
                    color: BlackColor,
                },
                {
                    predicate: AttributeElements.Product.Explorer,
                    color: RedColor,
                },
            ],
        },
    });

export default [colorsAndPalette, colorAssignment];