// https://www.terraform.io/docs/providers/oci/r/data_oci_core_network_security_group_security_rules.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "direction": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "network_security_group_id": {
        "type": "string",
        "required": true
      },
      "security_rules": {
        "type": [
          "list",
          [
            "object",
            {
              "description": "string",
              "destination": "string",
              "destination_type": "string",
              "direction": "string",
              "icmp_options": [
                "list",
                [
                  "object",
                  {
                    "code": "number",
                    "type": "number"
                  }
                ]
              ],
              "id": "string",
              "is_valid": "bool",
              "protocol": "string",
              "source": "string",
              "source_type": "string",
              "stateless": "bool",
              "tcp_options": [
                "list",
                [
                  "object",
                  {
                    "destination_port_range": [
                      "list",
                      [
                        "object",
                        {
                          "max": "number",
                          "min": "number"
                        }
                      ]
                    ],
                    "source_port_range": [
                      "list",
                      [
                        "object",
                        {
                          "max": "number",
                          "min": "number"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "time_created": "string",
              "udp_options": [
                "list",
                [
                  "object",
                  {
                    "destination_port_range": [
                      "list",
                      [
                        "object",
                        {
                          "max": "number",
                          "min": "number"
                        }
                      ]
                    ],
                    "source_port_range": [
                      "list",
                      [
                        "object",
                        {
                          "max": "number",
                          "min": "number"
                        }
                      ]
                    ]
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreNetworkSecurityGroupSecurityRulesConfig extends TerraformMetaArguments {
  readonly direction?: string;
  readonly networkSecurityGroupId: string;
  /** filter block */
  readonly filter?: DataOciCoreNetworkSecurityGroupSecurityRulesFilter[];
}
export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesIcmpOptions extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getNumberAttribute('code');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getNumberAttribute('type');
  }
}
export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsDestinationPortRange extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptionsSourcePortRange extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesTcpOptions extends ComplexComputedList {

  // destination_port_range - computed: true, optional: false, required: true
  public get destinationPortRange() {
    return 'not implemented' as any;
  }

  // source_port_range - computed: true, optional: false, required: true
  public get sourcePortRange() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsDestinationPortRange extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptionsSourcePortRange extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRulesUdpOptions extends ComplexComputedList {

  // destination_port_range - computed: true, optional: false, required: true
  public get destinationPortRange() {
    return 'not implemented' as any;
  }

  // source_port_range - computed: true, optional: false, required: true
  public get sourcePortRange() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules extends ComplexComputedList {

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: true
  public get destination() {
    return this.getStringAttribute('destination');
  }

  // destination_type - computed: true, optional: false, required: true
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // direction - computed: true, optional: false, required: true
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // icmp_options - computed: true, optional: false, required: true
  public get icmpOptions() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_valid - computed: true, optional: false, required: true
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_type - computed: true, optional: false, required: true
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // stateless - computed: true, optional: false, required: true
  public get stateless() {
    return this.getBooleanAttribute('stateless');
  }

  // tcp_options - computed: true, optional: false, required: true
  public get tcpOptions() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // udp_options - computed: true, optional: false, required: true
  public get udpOptions() {
    return 'not implemented' as any;
  }
}
export interface DataOciCoreNetworkSecurityGroupSecurityRulesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreNetworkSecurityGroupSecurityRules extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreNetworkSecurityGroupSecurityRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_network_security_group_security_rules',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._direction = config.direction;
    this._networkSecurityGroupId = config.networkSecurityGroupId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: false, optional: true, required: false
  private _direction?: string;
  public get direction() {
    return this._direction;
  }
  public set direction(value: string | undefined) {
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

  // network_security_group_id - computed: false, optional: false, required: true
  private _networkSecurityGroupId: string;
  public get networkSecurityGroupId() {
    return this._networkSecurityGroupId;
  }
  public set networkSecurityGroupId(value: string) {
    this._networkSecurityGroupId = value;
  }

  // security_rules - computed: true, optional: false, required: true
  public securityRules(index: string) {
    return new DataOciCoreNetworkSecurityGroupSecurityRulesSecurityRules(this, 'security_rules', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreNetworkSecurityGroupSecurityRulesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreNetworkSecurityGroupSecurityRulesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: this._direction,
      network_security_group_id: this._networkSecurityGroupId,
      filter: this._filter,
    };
  }
}
