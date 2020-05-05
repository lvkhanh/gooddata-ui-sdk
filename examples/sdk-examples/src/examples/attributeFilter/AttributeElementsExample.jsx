// (C) 2007-2020 GoodData Corporation
import React, { Component } from "react";
import { AttributeElements } from "@gooddata/sdk-ui";
import PropTypes from "prop-types";
import { Ldm } from "../../ldm";

export class AttributeFilterItem extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        uri: PropTypes.string.isRequired,
    };

    onChange(uri) {
        return event => console.log("AttributeFilterItem onChange", uri, event.target.value === "on");
    }

    render() {
        const { title, uri } = this.props;
        return (
            <label className="gd-list-item s-attribute-filter-list-item" style={{ display: "inline-flex" }}>
                <input type="checkbox" className="gd-input-checkbox" onChange={this.onChange(uri)} />
                <span>{title}</span>
            </label>
        );
    }
}

export class AttributeElementsExample extends Component {
    buildAttributeFilterItem(item) {
        const {
            element: { title, uri },
        } = item;

        return <AttributeFilterItem key={uri} uri={uri} title={title} />;
    }

    render() {
        return (
            <div style={{ minHeight: 500 }}>
                <AttributeElements
                    identifier={Ldm.EmployeeName.Default.attribute.displayForm}
                    options={{ limit: 20 }}
                >
                    {({ validElements, loadMore, isLoading, error }) => {
                        const { offset = null, count = null, total = null } = validElements
                            ? validElements.paging
                            : {};
                        if (error) {
                            return <div>{error}</div>;
                        }
                        return (
                            <div>
                                <button
                                    className="gd-button gd-button-secondary s-show-more-filters-button"
                                    onClick={loadMore}
                                    disabled={isLoading || offset + count === total}
                                >
                                    More
                                </button>
                                <h2>validElements</h2>
                                <pre>
                                    isLoading: {isLoading.toString()}
                                    <br />
                                    offset: {offset}
                                    <br />
                                    count: {count}
                                    <br />
                                    total: {total}
                                    <br />
                                    nextOffset: {offset + count}
                                </pre>
                                <div>
                                    {validElements
                                        ? validElements.items.map(this.buildAttributeFilterItem)
                                        : null}
                                </div>
                                {validElements ? (
                                    <pre>{JSON.stringify(validElements, null, "  ")}</pre>
                                ) : null}
                            </div>
                        );
                    }}
                </AttributeElements>
            </div>
        );
    }
}

export default AttributeElementsExample;
