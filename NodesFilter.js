(function() {
    (function() {
        function e(e, t, i) {
            var l;
            this.MARGIN_MAIN = e, this.graph = t, this.layout_mode = i, this.MARGIN = this.MARGIN_MAIN.LEGEND, 
            this.LICENSE_KEYS = this.LICENSE_CONTROL.array.map(function(e) {
                return e.key;
            }), this.LICENSE_LABELS = this.LICENSE_CONTROL.array.map(function(e) {
                return e.label;
            }), this.license_filter = this.LICENSE_CONTROL.array.map(function(e) {
                return e.filter;
            }), this.TVIEWS_KEYS = d3.keys(this.TVIEWS_CONTROL.labels), this.TVIEWS_KEYS.forEach(function(e) {
                return function(t, i) {
                    switch (t) {
                      case "All":
                        return e.TVIEWS_CONTROL.array[i] = {
                            key: t,
                            filter: 1,
                            label: t
                        };

                      default:
                        return e.TVIEWS_CONTROL.array[i] = {
                            key: t,
                            filter: 0,
                            label: t
                        };
                    }
                };
            }(this)), this.TVIEWS_LABELS = this.TVIEWS_CONTROL.array.map(function(e) {
                return e.label;
            }), this.tviews_filter = this.TVIEWS_CONTROL.array.map(function(e) {
                return e.filter;
            }), this.filterClass = new Filter(), l = "control_legend", this.LEG_CONTROL[l].active && (this.legends_set[l] = new LegendControl(l, this.LEG_CONTROL, this.MARGIN_MAIN)), 
            l = "cluster_legend", this.LEG_CONTROL[l].active && (this.legends_set[l] = new Legend(l, this.LEG_CONTROL, this.MARGIN_MAIN)), 
            l = "license_legend", this.LEG_CONTROL[l].active && (this.legends_set[l] = new Legend(l, this.LEG_CONTROL, this.MARGIN_MAIN), 
            this.legends_set[l].leg_labels = this.LICENSE_LABELS), l = "tviews_legend", this.LEG_CONTROL[l].active && (this.legends_set[l] = new Legend(l, this.LEG_CONTROL, this.MARGIN_MAIN), 
            this.legends_set[l].leg_labels = this.TVIEWS_LABELS), l = "layout_legend", this.LEG_CONTROL[l].active && (this.legends_set[l] = new Legend(l, this.LEG_CONTROL, this.MARGIN_MAIN), 
            this.legends_set[l].leg_info = this.LAYOUT_CONTROL, this.legends_set[l].createLayoutLegend(this.layout_mode, this.MARGIN_MAIN));
        }
        e.prototype.LICENSE_CONTROL = {
            array: [ {
                key: "All",
                filter: 1,
                label: "All"
            }, {
                key: "GPL (>= 3)",
                filter: 0,
                label: "GPL (>= 3)"
            }, {
                key: "GPL-3",
                filter: 0,
                label: "GPL-3"
            }, {
                key: "GPL (>= 2)",
                filter: 0,
                label: "GPL (>= 2)"
            }, {
                key: "GPL (>= 2.0)",
                filter: 0,
                label: "GPL (>= 2.0)"
            }, {
                key: "GPL-2",
                filter: 0,
                label: "GPL-2"
            }, {
                key: "GPL-2 | GPL-3",
                filter: 0,
                label: "GPL-2 | GPL-3"
            }, {
                key: "GPL",
                filter: 0,
                label: "GPL"
            }, {
                key: "MIT + file LICENSE",
                filter: 0,
                label: "MIT + file LICENSE"
            }, {
                key: "Rest",
                filter: 0,
                label: "Rest"
            } ],
            type: {
                dfield: "license",
                multiple: !1
            }
        }, e.prototype.TVIEWS_CONTROL = {
            labels: {
                All: "All",
                Bayesian: "Bayesian",
                ChemPhys: "ChemPhys",
                ClinicalTrials: "ClinicalTrials",
                Cluster: "Cluster",
                DifferentialEquations: "DifferentialEquations",
                Distributions: "Distributions",
                Econometrics: "Econometrics",
                Environmetrics: "Environmetrics",
                ExperimentalDesign: "ExperimentalDesign",
                ExtremeValue: "ExtremeValue",
                Finance: "Finance",
                FunctionalData: "FunctionalData",
                Genetics: "Genetics",
                Graphics: "Graphics",
                HighPerformanceComputing: "HighPerformanceComputing",
                MachineLearning: "MachineLearning",
                MedicalImaging: "MedicalImaging",
                MetaAnalysis: "MetaAnalysis",
                Multivariate: "Multivariate",
                NaturalLanguageProcessing: "NaturalLanguageProcessing",
                NumericalMathematics: "NumericalMathematics",
                OfficialStatistics: "OfficialStatistics",
                Optimization: "Optimization",
                Pharmacokinetics: "Pharmacokinetics",
                Phylogenetics: "Phylogenetics",
                Psychometrics: "Psychometrics",
                ReproducibleResearch: "ReproducibleResearch",
                Robust: "Robust",
                SocialSciences: "SocialSciences",
                Spatial: "Spatial",
                SpatioTemporal: "SpatioTemporal",
                Survival: "Survival",
                TimeSeries: "TimeSeries",
                WebTechnologies: "WebTechnologies",
                gR: "gR",
                Rest: "Rest"
            },
            array: [],
            type: {
                dfield: "TView",
                multiple: !0
            }
        }, e.prototype.LAYOUT_CONTROL = {
            radius: {
                type: "radial",
                values: [ 100, 300 ],
                filter: 200,
                title: "Radius",
                labels: [ "", "" ],
                style: 1
            },
            orbit_nr: {
                type: "radial",
                values: [ 18, 36 ],
                filter: 24,
                title: "Number of clusters at the first orbit",
                labels: [ "", "" ],
                style: 1
            },
            gravity: {
                type: "force",
                values: [ -20, -2 ],
                filter: -10,
                title: "Gravity force",
                labels: [ "", "" ],
                style: 1
            }
        }, e.prototype.LEG_CONTROL = {
            control_legend: {
                active: !0,
                label: "Legends",
                num: 1,
                drag_mode: !0
            },
            cluster_legend: {
                active: !0,
                label: "Clusters",
                num: 2,
                drag_mode: !0
            },
            software_legend: {
                active: !1,
                label: "Software",
                num: 10,
                drag_mode: !1
            },
            license_legend: {
                active: !0,
                label: "Licenses",
                num: 3,
                drag_mode: !0
            },
            tviews_legend: {
                active: !0,
                label: "Task views",
                num: 4,
                drag_mode: !0
            },
            layout_legend: {
                active: !0,
                label: "Layout settings",
                num: 5,
                drag_mode: !0
            }
        }, e.prototype.SW_KEYS = null, e.prototype.LICENSE_KEYS = null, e.prototype.MARGIN = null, 
        e.prototype.filterClass = null, e.prototype.graph = null, e.prototype.license_filter = null, 
        e.prototype.legends_set = [], e.prototype.updateLegends = function(e, t) {
            var i, l, s, a;
            if (this.LEG_CONTROL.cluster_legend.active && (i = this.filterClass.get_cluster_leg_data(e, this.graph.getPalette(), this.graph.clustering_dfield), 
            s = {
                left: 5,
                right: 10,
                top: 2,
                bottom: 2,
                size: 16,
                max_height: this.MARGIN.max_height,
                zoom: this.MARGIN.zoom
            }, this.legends_set.cluster_legend.createClusterLegend(s, i.nodes, "lg_cluster"), 
            this.graph.highlightGroup(".lg_cluster", i.keys, this.graph.clustering_dfield)), 
            this.LEG_CONTROL.license_legend.active && (a = this.filterClass.get_toggle_circles_leg_data_multiple(this.license_filter, e, this.LICENSE_KEYS, "license", this.LICENSE_CONTROL.type), 
            s = {
                top: 5,
                right: 0,
                bottom: 5,
                left: 5,
                size: 16,
                dx: 25,
                dy: 28,
                width: 335
            }, l = {
                standard: !1,
                color: "#139c8a"
            }, this.legends_set.license_legend.createLicenseLegend(a, this.license_filter, s, "lg_license", l), 
            this.graph.highlightGroup(".lg_license", this.LICENSE_KEYS, "license")), this.LEG_CONTROL.tviews_legend.active && (s = {
                top: 0,
                right: 0,
                bottom: 5,
                left: 5,
                size: 16,
                dx: 25,
                dy: 20,
                width: 430
            }, l = {
                standard: !1,
                color: "#139c8a"
            }, this.legends_set.tviews_legend.createTviewsLegend(this.tviews_filter, s, "lg_tviews", l), 
            this.graph.highlightGroupMultiple(".lg_tviews", this.TVIEWS_KEYS, "TView")), this.LEG_CONTROL.layout_legend.active && this.layout_mode !== t) return this.layout_mode = t, 
            this.legends_set.layout_legend.updateLayoutLegend(this.layout_mode);
        }, e.prototype.control_filter = function(e, t) {
            var i;
            switch (t[e] = 1 - t[e], i = t.length - 1, e) {
              case 0:
                t.forEach(function(e, i) {
                    return t[i] = 0 === i ? 1 : 0;
                });
                break;

              case i:
                t.forEach(function(e, l) {
                    return t[l] = l === i ? 1 : 0;
                });
                break;

              default:
                t[0] = 0, t[i] = 0;
            }
            return t;
        }, e.prototype.switch_filter = function(e, t) {
            switch (t) {
              case "license":
                return this.license_filter = this.control_filter(e, this.license_filter);

              case "tviews":
                return this.tviews_filter = this.control_filter(e, this.tviews_filter);
            }
        }, e.prototype.legend_filter = function(e) {
            return e = this.filterClass.legend_filter(this.LICENSE_CONTROL, this.license_filter, e), 
            e = this.filterClass.legend_filter(this.TVIEWS_CONTROL, this.tviews_filter, e);
        }, e.prototype.size_filter = function(e, t, i) {
            return this.filterClass.size_filter(e, t, i);
        }, e.prototype.getMatchingNodes = function(e, t) {
            return this.filterClass.getMatchingNodes(e, t);
        };
    })();
}).call(this);