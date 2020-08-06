// https://www.terraform.io/docs/providers/oci/r/core_network_security_group_security_rule.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "destination": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "destination_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "direction": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_valid": {
        "type": "bool",
        "computed": true
      },
      "network_security_group_id": {
        "type": "string",
        "required": true
      },
      "protocol": {
        "type": "string",
        "required": true
      },
      "source": {
        "type": "string",
        "optional": true
      },
      "source_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "stateless": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "icmp_options": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "code": {
              "type": "number",
              "optional": true
            },
            "type": {
              "type": "number",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "tcp_options": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "destination_port_range": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max": {
                    "type": "number",
                    "required": true
                  },
                  "min": {
                    "type": "number",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "source_port_range": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max": {
                    "type": "number",
                    "required": true
                  },
                  "min": {
                    "type": "number",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "udp_options": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "destination_port_range": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max": {
                    "type": "number",
                    "required": true
                  },
                  "min": {
                    "type": "number",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "source_port_range": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "max": {
                    "type": "number",
                    "required": true
                  },
                  "min": {
                    "type": "number",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CoreNetworkSecurityGroupSecurityRuleConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly destination?: string;
  readonly destinationType?: string;
  readonly direction: string;
  readonly networkSecurityGroupId: string;
  readonly protocol: string;
  readonly source?: string;
  readonly sourceType?: string;
  readonly stateless?: boolean;
  /** icmp_options block */
  readonly icmpOptions?: CoreNetworkSecurityGroupSecurityRuleIcmpOptions[];
  /** tcp_options block */
  readonly tcpOptions?: CoreNetworkSecurityGroupSecurityRuleTcpOptions[];
  /** timeouts block */
  readonly timeouts?: CoreNetworkSecurityGroupSecurityRuleTimeouts;
  /** udp_options block */
  readonly udpOptions?: CoreNetworkSecurityGroupSecurityRuleUdpOptions[];
}
export interface CoreNetworkSecurityGroupSecurityRuleIcmpOptions {
  readonly code?: number;
  readonly type: number;
}
export interface CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange {
  readonly max: number;
  readonly min: number;
}
export interface CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange {
  readonly max: number;
  readonly min: number;
}
export interface CoreNetworkSecurityGroupSecurityRuleTcpOptions {
  /** destination_port_range block */
  readonly destinationPortRange?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange[];
  /** source_port_range block */
  readonly sourcePortRange?: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange[];
}
export interface CoreNetworkSecurityGroupSecurityRuleTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange {
  readonly max: number;
  readonly min: number;
}
export interface CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange {
  readonly max: number;
  readonly min: number;
}
export interface CoreNetworkSecurityGroupSecurityRuleUdpOptions {
  /** destination_port_range block */
  readonly destinationPortRange?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange[];
  /** source_port_range block */
  readonly sourcePortRange?: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange[];
}

// Resource

export class CoreNetworkSecurityGroupSecurityRule extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CoreNetworkSecurityGroupSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_network_security_group_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._destination = config.destination;
    this._destinationType = config.destinationType;
    this._direction = config.direction;
    this._networkSecurityGroupId = config.networkSecurityGroupId;
    this._protocol = config.protocol;
    this._source = config.source;
    this._sourceType = config.sourceType;
    this._stateless = config.stateless;
    this._icmpOptions = config.icmpOptions;
    this._tcpOptions = config.tcpOptions;
    this._timeouts = config.timeouts;
    this._udpOptions = config.udpOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string;
  public get destination() {
    return this._destination ?? this.getStringAttribute('destination');
  }
  public set destination(value: string | undefined) {
    this._destination = value;
  }

  // destination_type - computed: true, optional: true, required: false
  private _destinationType?: string;
  public get destinationType() {
    return this._destinationType ?? this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string | undefined) {
    this._destinationType = value;
  }

  // direction - computed: false, optional: false, required: true
  private _direction: string;
  public get direction() {
    return this._direction;
  }
  public set direction(value: string) {
    this._direction = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_valid - computed: true, optional: false, required: true
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId: string;
  public get networkSecurityGroupId() {
    return this._networkSecurityGroupId;
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol: string;
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string) {
    this._protocol = value;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this._source;
  }
  public set source(value: string | undefined) {
    this._source = value;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string;
  public get sourceType() {
    return this._sourceType ?? this.getStringAttribute('source_type');
  }
  public set sourceType(value: string | undefined) {
    this._sourceType = value;
  }

  // stateless - computed: true, optional: true, required: false
  private _stateless?: boolean;
  public get stateless() {
    return this._stateless ?? this.getBooleanAttribute('stateless');
  }
  public set stateless(value: boolean | undefined) {
    this._stateless = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // icmp_options - computed: false, optional: true, required: false
  private _icmpOptions?: CoreNetworkSecurityGroupSecurityRuleIcmpOptions[];
  public get icmpOptions() {
    return this._icmpOptions;
  }
  public set icmpOptions(value: CoreNetworkSecurityGroupSecurityRuleIcmpOptions[] | undefined) {
    this._icmpOptions = value;
  }

  // tcp_options - computed: false, optional: true, required: false
  private _tcpOptions?: CoreNetworkSecurityGroupSecurityRuleTcpOptions[];
  public get tcpOptions() {
    return this._tcpOptions;
  }
  public set tcpOptions(value: CoreNetworkSecurityGroupSecurityRuleTcpOptions[] | undefined) {
    this._tcpOptions = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CoreNetworkSecurityGroupSecurityRuleTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CoreNetworkSecurityGroupSecurityRuleTimeouts | undefined) {
    this._timeouts = value;
  }

  // udp_options - computed: false, optional: true, required: false
  private _udpOptions?: CoreNetworkSecurityGroupSecurityRuleUdpOptions[];
  public get udpOptions() {
    return this._udpOptions;
  }
  public set udpOptions(value: CoreNetworkSecurityGroupSecurityRuleUdpOptions[] | undefined) {
    this._udpOptions = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      destination: this._destination,
      destination_type: this._destinationType,
      direction: this._direction,
      network_security_group_id: this._networkSecurityGroupId,
      protocol: this._protocol,
      source: this._source,
      source_type: this._sourceType,
      stateless: this._stateless,
      icmp_options: this._icmpOptions,
      tcp_options: this._tcpOptions,
      timeouts: this._timeouts,
      udp_options: this._udpOptions,
    };
  }
}
