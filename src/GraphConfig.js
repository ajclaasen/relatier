import * as React from 'react';

export const NODE_KEY = 'id'; // Key used to identify nodes

// These keys are arbitrary (but must match the config)
// However, GraphView renders text differently for empty types
// so this has to be passed in if that behavior is desired.
export const EMPTY_TYPE = 'customEmpty'; // Empty node type
export const DEFAULT_TYPE = 'default';
export const EMPTY_EDGE_TYPE = 'emptyEdge';
export const DEFAULT_EDGE_TYPE = 'defaultEdge';

export const nodeTypes = [EMPTY_TYPE, DEFAULT_TYPE];
export const edgeTypes = [EMPTY_EDGE_TYPE, DEFAULT_EDGE_TYPE];

const EmptyNodeShape = (
  <symbol viewBox="0 0 154 154" width="154" height="154" id="emptyNode">
    <circle cx="77" cy="77" r="76" />
  </symbol>
);

const CustomEmptyShape = (
  <symbol viewBox="0 0 100 100" id="customEmpty">
    <circle cx="50" cy="50" r="45" />
  </symbol>
);

const DefaultShape = (
  <symbol viewBox="-27 0 154 154" width="154" height="154" id="default">
    <rect transform="translate(50) rotate(45)" width="109" height="109" />
  </symbol>
);

const FactionShape = (
  <symbol viewBox="0 0 200 100" width="200" height="100" id="faction">
    <rect width="200" height="100" />
    <foreignObject width="200" height="100">
      <div xmlns="http://www.w3.org/1999/xhtml">
        <i class="fas fa-users fa-9x background-icon"></i>
      </div>
    </foreignObject>
  </symbol>
);

const EmptyEdgeShape = (
  <symbol viewBox="0 0 50 50" id="emptyEdge">
    <circle cx="25" cy="25" r="8" fill="currentColor" />
  </symbol>
);

const DefaultEdgeShape = (
  <symbol viewBox="0 0 50 50" id="defaultEdge">
    <rect
      transform="rotate(45)"
      x="27.5"
      y="-7.5"
      width="15"
      height="15"
      fill="currentColor"
    />
  </symbol>
);

export default {
  NodeTypes: {
    emptyNode: {
      shape: EmptyNodeShape,
      shapeId: '#emptyNode',
      typeText: 'None',
    },
    empty: {
      shape: CustomEmptyShape,
      shapeId: '#empty',
      typeText: 'None',
    },
    default: {
      shape: DefaultShape,
      shapeId: '#default',
      typeText: 'Default',
    },
    faction: {
      shape: FactionShape,
      shapeId: '#faction',
      typeText: 'Faction',
    },
  },
  NodeSubtypes: {},
  EdgeTypes: {
    emptyEdge: {
      shape: EmptyEdgeShape,
      shapeId: '#emptyEdge',
    },
    defaultEdge: {
      shape: DefaultEdgeShape,
      shapeId: '#defaultEdge',
    }
  },
};
