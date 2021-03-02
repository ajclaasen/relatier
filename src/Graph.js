import React, { Component } from 'react';

import {
  GraphView,
} from 'react-digraph';

import GraphConfig from './GraphConfig';

import data from './example-graph.json';

const sample = data;

class Graph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      graph: sample,
      selected: {},
    }
  }

  render() {
    const nodes = this.state.graph.nodes;
    const edges = this.state.graph.edges;
    // const selected = this.state.selected;

    const NodeKey = GraphConfig.NODE_KEY;
    const NodeTypes = GraphConfig.NodeTypes;
    const NodeSubtypes = GraphConfig.NodeSubtypes;
    const EdgeTypes = GraphConfig.EdgeTypes;

    return (
      <div id='graph' style={{height: '100vh'}}>
        <GraphView  
          edges={edges}
          edgeTypes={EdgeTypes}
          nodeKey={"id"}
          nodes={nodes}
          nodeSubtypes={NodeSubtypes}
          nodeTypes={NodeTypes}
        />
      </div>
    );
  }
}

export default Graph;