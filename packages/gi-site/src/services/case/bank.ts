import { GIConfig, GraphSchemaData } from '@antv/gi-sdk';
import { ICase } from '../typing';
const source = {
  nodes: [
    {
      create_date: '2019-01-03T00:00:00',
      icon: 'account_balance',
      id: 'account_7',
      is_different_bank: 0,
      data: {},
      defaultStyle: {},
    },
    {
      create_date: '2019-01-05T00:00:00',
      icon: 'account_balance',
      id: 'account_20',
      is_different_bank: 0,
      data: {},
      defaultStyle: {},
    },
    {
      create_date: '2019-01-07T00:00:00',
      icon: 'account_balance',
      id: 'account_55',
      is_different_bank: 0,
      data: {},
      defaultStyle: {},
    },
    {
      create_date: '2019-01-15T00:00:00',
      icon: 'account_balance',
      id: 'account_81',
      is_different_bank: 0,
      data: {},
      defaultStyle: {},
    },
    {
      create_date: '2019-01-15T00:00:00',
      icon: 'account_balance',
      id: 'account_103',
      is_different_bank: 0,
      data: {},
      defaultStyle: {},
    },
    {
      create_date: '2019-01-03T00:00:00',
      icon: 'account_balance',
      id: 'account_901',
      is_different_bank: 0,
      data: {},
      defaultStyle: {},
    },
    {
      create_date: '2019-01-10T00:00:00',
      icon: 'account_balance',
      id: 'account_902',
      is_different_bank: 0,
      data: {},
      defaultStyle: {},
    },
    {
      create_date: '2019-01-09T00:00:00',
      icon: 'account_balance',
      id: 'account_903',
      is_different_bank: 1,
      data: {},
      defaultStyle: {},
    },
    {
      create_date: '2019-01-08T00:00:00',
      icon: 'account_balance',
      id: 'account_904',
      is_different_bank: 1,
      data: {},
      defaultStyle: {},
    },
    {
      icon: 'account_box',
      id: 'customer_7',
      data: {},
      defaultStyle: {},
      address: '-',
      customer_type: 'retail',
      first_name: '-',
      last_name: '-',
      phone: '-',
      remarks: "high-value IB txn into customer 103's account",
      risk_category: 'medium',
      risk_score: 50,
    },
    {
      icon: 'account_box',
      id: 'customer_20',
      data: {},
      defaultStyle: {},
      address: '-',
      customer_type: 'retail',
      first_name: '-',
      last_name: '-',
      phone: '-',
      remarks: "high-value IB txn into customer 103's account",
      risk_category: 'medium',
      risk_score: 50,
    },
    {
      icon: 'account_box',
      id: 'customer_55',
      data: {},
      defaultStyle: {},
      address: '-',
      customer_type: 'retail',
      first_name: '-',
      last_name: '-',
      phone: '-',
      remarks: "high-value IB txn into customer 103's account",
      risk_category: 'medium',
      risk_score: 50,
    },
    {
      icon: 'account_box',
      id: 'customer_81',
      data: {},
      defaultStyle: {},
      address: '-',
      customer_type: 'retail',
      first_name: '-',
      last_name: '-',
      phone: '-',
      remarks: "high-value IB txn into customer 103's account",
      risk_category: 'medium',
      risk_score: 50,
    },
    {
      icon: 'account_box',
      id: 'customer_103',
      data: {},
      defaultStyle: {},
      address: '103 RD',
      customer_type: 'retail',
      first_name: 'john',
      last_name: 'doe',
      phone: '+65 0000 0103',
      remarks: 'high-value purchases from luxury retailer. source of funds from 4 related accounts',
      risk_category: 'high',
      risk_score: 99,
    },
    {
      icon: 'account_box',
      id: 'customer_901',
      data: {},
      defaultStyle: {},
      address: '901 RD',
      customer_type: 'retail',
      first_name: 'jane',
      last_name: 'doe',
      phone: '+65 0000 0103',
      remarks:
        "source of funds for customer 103's purchase of luxury items. customer has same phone number as customer 103.",
      risk_category: 'medium',
      risk_score: 74,
    },
    {
      icon: 'account_box',
      id: 'customer_902',
      data: {},
      defaultStyle: {},
      address: '103 RD',
      customer_type: 'retail',
      first_name: 'jim',
      last_name: 'smith',
      phone: '+65 0000 0902',
      remarks:
        "source of funds for customer 103's purchase of luxury items. customer has same address as customer 103.",
      risk_category: 'medium',
      risk_score: 74,
    },
    {
      icon: '-',
      id: 'other_banks',
      data: {},
      defaultStyle: {},
      address: '-',
      customer_type: '-',
      first_name: '-',
      last_name: '-',
      phone: '-',
      remarks: 'other banks',
      risk_category: '-',
      risk_score: '-',
    },
  ],
  edges: [
    {
      amount: 1000000,
      balance: 200000,
      category: 'ib_txn',
      date: '2020-01-01T00:00:00',
      id: 'ib_txn_1',
      is_foreign_source: 0,
      is_foreign_target: 1,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_103',
      source_owner: 'customer_103',
      target: 'account_904',
      target_owner: 'other_banks',
      time: '00:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 100000,
      balance: null,
      category: 'ib_txn',
      date: '2020-01-02T01:00:00',
      id: 'ib_txn_2',
      is_foreign_source: 1,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_903',
      source_owner: 'other_banks',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '01:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 50000,
      balance: 250000,
      category: 'ib_txn',
      date: '2020-01-02T02:00:00',
      id: 'ib_txn_3',
      is_foreign_source: 0,
      is_foreign_target: 1,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_103',
      source_owner: 'customer_103',
      target: 'account_904',
      target_owner: 'other_banks',
      time: '02:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 2000000,
      balance: null,
      category: 'ib_txn',
      date: '2020-01-01T03:00:00',
      id: 'ib_txn_4',
      is_foreign_source: 1,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_904',
      source_owner: 'other_banks',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '03:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 1000000,
      balance: 1250000,
      category: 'ib_txn',
      date: '2020-01-02T04:00:00',
      id: 'ib_txn_5',
      is_foreign_source: 0,
      is_foreign_target: 1,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_103',
      source_owner: 'customer_103',
      target: 'account_903',
      target_owner: 'other_banks',
      time: '04:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 1000000,
      balance: 250000,
      category: 'ib_txn',
      date: '2020-01-02T05:00:00',
      id: 'ib_txn_6',
      is_foreign_source: 0,
      is_foreign_target: 1,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_103',
      source_owner: 'customer_103',
      target: 'account_903',
      target_owner: 'other_banks',
      time: '05:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 250000,
      balance: 10000,
      category: 'ib_txn',
      date: '2020-01-01T06:00:00',
      id: 'ib_txn_7',
      is_foreign_source: 0,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_901',
      source_owner: 'customer_901',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '06:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 250000,
      balance: 300000,
      category: 'ib_txn',
      date: '2020-01-01T06:30:00',
      id: 'ib_txn_8',
      is_foreign_source: 0,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_902',
      source_owner: 'customer_902',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '06:30:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 250000,
      balance: null,
      category: 'ib_txn',
      date: '2020-01-02T06:00:00',
      id: 'ib_txn_9',
      is_foreign_source: 1,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_903',
      source_owner: 'other_banks',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '06:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 250000,
      balance: null,
      category: 'ib_txn',
      date: '2020-01-01T00:00:00',
      id: 'ib_txn_10',
      is_foreign_source: 1,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_904',
      source_owner: 'other_banks',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '00:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 125000,
      balance: 225000,
      category: 'ib_txn',
      date: '2020-01-03T22:00:00',
      id: 'ib_txn_72',
      is_foreign_source: 0,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_7',
      source_owner: 'customer_7',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '22:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 250000,
      balance: 475000,
      category: 'ib_txn',
      date: '2020-01-03T22:00:00',
      id: 'ib_txn_73',
      is_foreign_source: 0,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_55',
      source_owner: 'customer_55',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '22:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 150000,
      balance: 625000,
      category: 'ib_txn',
      date: '2020-01-04T18:00:00',
      id: 'ib_txn_74',
      is_foreign_source: 0,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_20',
      source_owner: 'customer_20',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '18:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      amount: 300000,
      balance: 925000,
      category: 'ib_txn',
      date: '2020-01-04T18:00:00',
      id: 'ib_txn_75',
      is_foreign_source: 0,
      is_foreign_target: 0,
      is_high_risk_source_target_location: 0,
      relation: 'ib_transfer',
      source: 'account_81',
      source_owner: 'customer_81',
      target: 'account_103',
      target_owner: 'customer_103',
      time: '18:00:00',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_210',
      relation: 'owns',
      source: 'customer_7',
      target: 'account_7',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_223',
      relation: 'owns',
      source: 'customer_20',
      target: 'account_20',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_258',
      relation: 'owns',
      source: 'customer_55',
      target: 'account_55',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_284',
      relation: 'owns',
      source: 'customer_81',
      target: 'account_81',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_306',
      relation: 'owns',
      source: 'customer_103',
      target: 'account_103',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_307',
      relation: 'owns',
      source: 'customer_901',
      target: 'account_901',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_308',
      relation: 'owns',
      source: 'customer_902',
      target: 'account_902',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_310',
      relation: 'owns',
      source: 'other_banks',
      target: 'account_903',
      data: {},
      defaultStyle: {},
    },
    {
      category: 'ownership',
      id: 'ownership_311',
      relation: 'owns',
      source: 'other_banks',
      target: 'account_904',
      data: {},
      defaultStyle: {},
    },
  ],
};

const schema: GraphSchemaData = {
  nodes: [
    {
      nodeType: 'account_balance',
      nodeTypeKeyFromProperties: 'icon',
      properties: {
        create_date: 'string',
        icon: 'string',
        id: 'string',
        is_different_bank: 'number',
      },
    },
    {
      nodeType: 'account_box',
      nodeTypeKeyFromProperties: 'icon',
      properties: {
        icon: 'string',
        id: 'string',
        address: 'string',
        customer_type: 'string',
        first_name: 'string',
        last_name: 'string',
        phone: 'string',
        remarks: 'string',
        risk_category: 'string',
        risk_score: 'number',
      },
    },
    {
      nodeType: '-',
      nodeTypeKeyFromProperties: 'icon',
      properties: {
        icon: 'string',
        id: 'string',
        address: 'string',
        customer_type: 'string',
        first_name: 'string',
        last_name: 'string',
        phone: 'string',
        remarks: 'string',
        risk_category: 'string',
        risk_score: 'string',
      },
    },
  ],
  edges: [
    {
      edgeType: 'ib_txn',
      edgeTypeKeyFromProperties: 'category',
      sourceNodeType: 'account_balance',
      targetNodeType: 'account_balance',
      properties: {
        amount: 'number',
        balance: 'number',
        category: 'string',
        date: 'string',
        id: 'string',
        is_foreign_source: 'number',
        is_foreign_target: 'number',
        is_high_risk_source_target_location: 'number',
        relation: 'string',
        source: 'string',
        source_owner: 'string',
        target: 'string',
        target_owner: 'string',
        time: 'string',
      },
    },
    {
      edgeType: 'ownership',
      edgeTypeKeyFromProperties: 'category',
      sourceNodeType: 'account_box',
      targetNodeType: 'account_balance',
      properties: {
        category: 'string',
        id: 'string',
        relation: 'string',
        source: 'string',
        target: 'string',
      },
    },
  ],
};

const transform = source => {
  return {
    nodes: source.nodes.map(item => {
      return {
        data: item,
        id: item.id,
        nodeType: item['icon'],
        nodeTypeKeyFromProperties: 'icon',
      };
    }),
    edges: source.edges.map(item => {
      return {
        data: item,
        source: item.source,
        target: item.target,
        id: item.id,
        edgeType: item['category'],
        edgeTypeKeyFromProperties: 'category',
      };
    }),
  };
};

const activeAssetsKeys = {
  elements: ['SimpleNode', 'SimpleEdge'],
  components: [
    'ZoomIn',
    'ZoomOut',
    'FitView',
    'FitCenter',
    'LassoSelect',
    'PropertiesPanel',
    'ActivateRelations',
    'CanvasSetting',
    'NodeLegend',
    'Placeholder',
    'FilterPanel',
    'LargeGraph',
    'MapMode',
    'SnapshotGallery',
    'ContextMenu',
    'ToggleClusterWithMenu',
    'NeighborsQuery',
    'Copyright',
    'Loading',
    'PinNodeWithMenu',
    'ForceSimulation',
    'Initializer',
    'LayoutSwitch',
    'GrailLayout',
    'TableMode',
    'InfoDetection',
    'SankeyAnalysis',
  ],
  layouts: ['GraphinForce', 'Concentric', 'Dagre', 'FundForce'],
};
const projectConfig: GIConfig = {
  nodes: [
    {
      id: 'SimpleNode',
      props: {
        size: 26,
        color: '#ddd',
        label: [],
      },
      groupName: '默认样式',
      expressions: [],
      logic: true,
    },
    {
      id: 'SimpleNode',
      props: {
        size: 26,
        color: '#3056E3',
        label: ['account_balance.id'],
        advanced: {
          icon: {
            type: 'font',
            value: 'bank',
            fill: '#fff',
            visible: true,
          },
          keyshape: {
            fillOpacity: 0.8,
          },
          label: {
            visible: true,
            fill: '#000',
            fontSize: 12,
            position: 'bottom',
          },
          badge: {
            visible: false,
          },
        },
      },
      groupName: 'ACCOUNT_BALANCE TYPE',
      expressions: [
        {
          name: 'icon',
          operator: 'eql',
          value: 'account_balance',
        },
      ],
      logic: true,
    },
    {
      id: 'SimpleNode',
      props: {
        size: 26,
        color: 'rgba(245,166,35,1)',
        label: ['account_box.id'],
        advanced: {
          icon: {
            type: 'font',
            value: 'user',
            fill: '#fff',
            visible: true,
          },
          keyshape: {
            fillOpacity: 0.8,
          },
          label: {
            visible: true,
            fill: '#000',
            fontSize: 12,
            position: 'bottom',
          },
          badge: {
            visible: false,
          },
        },
      },
      groupName: 'ACCOUNT_BOX TYPE',
      expressions: [
        {
          name: 'icon',
          operator: 'eql',
          value: 'account_box',
        },
      ],
      logic: true,
    },
    {
      id: 'SimpleNode',
      props: {
        size: 26,
        color: '#795AE1',
        label: ['-.id'],
      },
      groupName: '- TYPE',
      expressions: [
        {
          name: 'icon',
          operator: 'eql',
          value: '-',
        },
      ],
      logic: true,
    },
  ],
  edges: [
    {
      id: 'SimpleEdge',
      props: {
        size: 1,
        color: '#ddd',
        label: [],
        advanced: {
          keyshape: {
            customPoly: false,
            lineDash: [],
            opacity: 1,
          },
          label: {
            visible: true,
            fontSize: 12,
            offset: [0, 0],
            fill: '#ddd',
            backgroundEnable: true,
            backgroundFill: '#fff',
            backgroundStroke: '#fff',
          },
          animate: {
            visible: true,
          },
        },
      },
      groupName: '默认样式',
      expressions: [],
      logic: true,
    },
    {
      id: 'SimpleEdge',
      props: {
        size: 1,
        color: '#3056E3',
        label: ['ib_txn.amount'],
        advanced: {
          keyshape: {
            customPoly: false,
            lineDash: [],
            opacity: 1,
          },
          label: {
            visible: true,
            fontSize: 12,
            offset: [0, 0],
            fill: '#3056E3',
            backgroundEnable: true,
            backgroundFill: '#fff',
            backgroundStroke: '#fff',
          },
          animate: {
            visible: true,
            type: 'circle-running',
            dotColor: '#3056E3',
            repeat: true,
            duration: 3000,
          },
        },
      },
      groupName: 'IB_TXN TYPE',
      expressions: [
        {
          name: 'category',
          operator: 'eql',
          value: 'ib_txn',
        },
      ],
      logic: true,
    },
    {
      id: 'SimpleEdge',
      props: {
        size: 1,
        color: 'rgba(245,166,35,1)',
        label: ['ownership.relation'],
        advanced: {
          keyshape: {
            customPoly: false,
            lineDash: [],
            opacity: 1,
          },
          label: {
            visible: true,
            fontSize: 12,
            offset: [0, 0],
            fill: 'rgba(245,166,35,1)',
            backgroundEnable: true,
            backgroundFill: '#fff',
            backgroundStroke: '#fff',
          },
          animate: {
            visible: false,
            type: 'circle-running',
            dotColor: 'red',
            repeat: true,
            duration: 3000,
          },
        },
      },
      groupName: 'OWNERSHIP TYPE',
      expressions: [
        {
          name: 'category',
          operator: 'eql',
          value: 'ownership',
        },
      ],
      logic: true,
    },
  ],
  layout: {
    id: 'Dagre',
    props: {
      type: 'dagre',
      rankdir: 'TB',
      align: null,
      nodesep: 40,
      ranksep: 80,
    },
  },
  components: [
    {
      id: 'ZoomIn',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '放大',
          isShowIcon: true,
          icon: 'icon-zoomin',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'ZoomOut',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '缩小',
          isShowIcon: true,
          icon: 'icon-zoomout',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'FitView',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '自适应',
          isShowIcon: true,
          icon: 'icon-fit-view',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'FitCenter',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '视图居中',
          isShowIcon: true,
          icon: 'icon-fit-center',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'LassoSelect',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '自由圈选',
          isShowIcon: true,
          icon: 'icon-lasso',
          isShowTooltip: true,
          tooltip: '按住Shift，点击画布即可自由圈选',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'PropertiesPanel',
      props: {
        serviceId: 'GI/PropertiesPanel',
        title: '属性面板',
        placement: 'RT',
        width: '356px',
        height: 'calc(100% - 0px)',
        offset: [10, 10],
        animate: false,
        defaultiStatistic: false,
      },
    },
    {
      id: 'ActivateRelations',
      props: {
        enableNodeHover: true,
        enableEdgeHover: true,
        enable: true,
        trigger: 'click',
        upstreamDegree: 1,
        downstreamDegree: 1,
      },
    },
    {
      id: 'CanvasSetting',
      props: {
        styleCanvas: {
          background: '#fff',
          backgroundImage: 'https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*k9t4QamMuQ4AAAAAAAAAAAAAARQnAQ',
        },
        dragCanvas: {
          disabled: false,
          direction: 'both',
          enableOptimize: false,
        },
        zoomCanvas: {
          disabled: false,
          enableOptimize: true,
        },
      },
    },
    {
      id: 'NodeLegend',
      props: {
        sortKey: 'type',
        textColor: '#ddd',
        placement: 'LB',
        offset: [100, 20],
      },
    },
    {
      id: 'Placeholder',
      name: '画布占位符',
      props: {
        img: 'https://gw.alipayobjects.com/zos/bmw-prod/db278704-6158-432e-99d2-cc5db457585d.svg',
        text: '当前画布为空，请先试试「数据/图数据源/导入/示例数据」',
        width: 380,
      },
    },
    {
      id: 'FilterPanel',
      name: '筛选面板',
      props: {
        filterKeys: ['node-address', 'edge-amount'],
        isFilterIsolatedNodes: true,
        highlightMode: true,
        filterLogic: 'and',
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '筛选面板',
          isShowIcon: true,
          icon: 'icon-filter',
          isShowTooltip: true,
          tooltip: '通过属性筛选画布信息，可自定义',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'top',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
        histogramColor: '#3056E3',
      },
    },
    {
      id: 'LargeGraph',
      name: '3D大图',
      props: {
        visible: false,
        minSize: '50%',
        maxSize: '100%',
        placement: 'RB',
        offset: [0, 0],
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '3D大图',
          isShowIcon: true,
          icon: 'icon-3d',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
        backgroundColor: '#fff',
        highlightColor: 'red',
      },
    },
    {
      id: 'MapMode',
      name: '地图模式',
      props: {
        visible: false,
        type: 'mapbox',
        theme: 'light',
        minSize: '50%',
        maxSize: '100%',
        placement: 'RB',
        offset: [0, 0],
        longitudeKey: 'longitude',
        latitudeKey: 'latitude',
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '地图模式',
          isShowIcon: true,
          icon: 'icon-global',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'SnapshotGallery',
      name: '快照画廊',
      props: {
        background: '#fff',
        direction: 'horizontal',
        placement: 'LT',
        offset: [20, 20],
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '快照画廊',
          isShowIcon: true,
          icon: 'icon-camera',
          isShowTooltip: true,
          tooltip: '快照画廊(快捷键ctrl+x)',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'ContextMenu',
      name: '右键菜单',
      props: {
        GI_CONTAINER: ['NeighborsQuery', 'ToggleClusterWithMenu', 'PinNodeWithMenu'],
      },
    },
    {
      id: 'ToggleClusterWithMenu',
      name: '展开/收起',
      props: {
        isReLayout: false,
        degree: 1,
      },
    },
    {
      id: 'NeighborsQuery',
      name: '邻居查询',
      props: {
        serviceId: 'GI/NeighborsQuery',
        degree: '1',
        isFocus: true,
      },
    },
    {
      id: 'Copyright',
      name: '版权',
      props: {
        imageUrl: 'https://gw.alipayobjects.com/zos/bmw-prod/c2d4b2f5-2a34-4ae5-86c4-df97f7136105.svg',
        width: 200,
        height: 30,
        placement: 'RB',
        offset: [10, 10],
      },
    },
    {
      id: 'Loading',
      name: '加载动画',
      props: {},
    },
    {
      id: 'PinNodeWithMenu',
      name: '固定节点(MENU)',
      props: {
        color: '#fff',
        fill: '#262626',
      },
    },
    {
      id: 'ForceSimulation',
      name: '力导布局控制器',
      props: {
        autoPin: true,
        dragNodeMass: 10000000,
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '力导布局控制器',
          isShowIcon: true,
          icon: 'icon-layout-force',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'Initializer',
      name: '初始化器',
      props: {
        serviceId: 'GI/GI_SERVICE_INTIAL_GRAPH',
        schemaServiceId: 'GI/GI_SERVICE_SCHEMA',
        GI_INITIALIZER: true,
      },
    },
    {
      id: 'LayoutSwitch',
      name: '布局切换',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC: {
          visible: false,
          disabled: false,
          isShowTitle: false,
          title: '布局切换',
          isShowIcon: true,
          icon: 'icon-layout',
          isShowTooltip: false,
          tooltip: '一键切换画布布局',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
        },
      },
    },
    {
      id: 'GrailLayout',
      name: '圣杯布局',
      props: {
        GI_CONTAINER_LEFT: ['FilterPanel'],
        leftDisplay: true,
        leftWidth: '400px',
        GI_CONTAINER_RIGHT: ['SankeyAnalysis', 'InfoDetection'],
        rightDisplay: true,
        rightWidth: '350px',
        GI_CONTAINER_BOTTOM: ['TableMode'],
        bottomDisplay: true,
        bottomHeight: '400px',
      },
    },
    {
      id: 'TableMode',
      name: '表格模式',
      props: {
        enableCopy: true,
        isSelectedActive: true,
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '表格模式',
          isShowIcon: true,
          icon: 'icon-table',
          isShowTooltip: true,
          tooltip: '将画布中的节点和边以表格形式展示',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'InfoDetection',
      name: '信息检测',
      props: {
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '信息检测',
          isShowIcon: true,
          icon: 'icon-infomation',
          isShowTooltip: true,
          tooltip: '检测画布中孤立点、环等',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
    {
      id: 'SankeyAnalysis',
      name: '桑基图分析',
      props: {
        weightField: 'amount',
        GI_CONTAINER_INDEX: 2,
        GIAC_CONTENT: {
          visible: false,
          disabled: false,
          isShowTitle: true,
          title: '桑基图分析',
          isShowIcon: true,
          icon: 'icon-sankey',
          isShowTooltip: true,
          tooltip: '',
          tooltipColor: '#3056e3',
          tooltipPlacement: 'right',
          hasDivider: false,
          height: '60px',
          isVertical: true,
          containerType: 'div',
          containerAnimate: false,
          containerPlacement: 'RT',
          offset: [0, 0],
          containerWidth: '400px',
          containerHeight: 'calc(100% - 100px)',
          contaienrMask: false,
        },
      },
    },
  ],
};

const project: ICase = {
  engineId: 'GI',
  engineContext: {
    schemaData: schema,
    data: transform(source),
  },
  data: {
    inputData: [
      {
        uid: 'rc-upload-1660804822000-2',
        name: 'bank.json',
      },
    ],
    transData: transform(source),
  },
  schemaData: schema,
  activeAssetsKeys,
  type: 'case',
  name: '银行案例',
  projectConfig,
  gmtCreate: '2022-11-22',
  id: 'bank',
  title: '在银行反洗钱分析场景的应用实践',
  tag: '金融风控',
  author: '山果',
  time: '2022.06.06',
  video: 'https://www.bilibili.com/video/BV1mg411X7Bh?share_source=copy_web',
  coverImg: 'https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*FZLuRI0h-HMAAAAAAAAAAAAAARQnAQ',
};

export default project;