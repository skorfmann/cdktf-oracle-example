// https://www.terraform.io/docs/providers/oci/r/data_oci_core_security_lists.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "security_lists": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "egress_security_rules": [
                "list",
                [
                  "object",
                  {
                    "description": "string",
                    "destination": "string",
                    "destination_type": "string",
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
                    "protocol": "string",
                    "stateless": "bool",
                    "tcp_options": [
                      "list",
                      [
                        "object",
                        {
                          "max": "number",
                          "min": "number",
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
                    "udp_options": [
                      "list",
                      [
                        "object",
                        {
                          "max": "number",
                          "min": "number",
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
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "ingress_security_rules": [
                "list",
                [
                  "object",
                  {
                    "description": "string",
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
                    "protocol": "string",
                    "source": "string",
                    "source_type": "string",
                    "stateless": "bool",
                    "tcp_options": [
                      "list",
                      [
                        "object",
                        {
                          "max": "number",
                          "min": "number",
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
                    "udp_options": [
                      "list",
                      [
                        "object",
                        {
                          "max": "number",
                          "min": "number",
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
              "state": "string",
              "time_created": "string",
              "vcn_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "vcn_id": {
        "type": "string",
        "optional": true
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

export interface DataOciCoreSecurityListsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  readonly vcnId?: string;
  /** filter block */
  readonly filter?: DataOciCoreSecurityListsFilter[];
}
export class DataOciCoreSecurityListsSecurityListsEgressSecurityRulesIcmpOptions extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getNumberAttribute('code');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getNumberAttribute('type');
  }
}
export class DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptionsSourcePortRange extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreSecurityListsSecurityListsEgressSecurityRulesTcpOptions extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }

  // source_port_range - computed: true, optional: false, required: true
  public get sourcePortRange() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptionsSourcePortRange extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreSecurityListsSecurityListsEgressSecurityRulesUdpOptions extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }

  // source_port_range - computed: true, optional: false, required: true
  public get sourcePortRange() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreSecurityListsSecurityListsEgressSecurityRules extends ComplexComputedList {

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

  // icmp_options - computed: true, optional: false, required: true
  public get icmpOptions() {
    return 'not implemented' as any;
  }

  // protocol - computed: true, optional: false, required: true
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // stateless - computed: true, optional: false, required: true
  public get stateless() {
    return this.getBooleanAttribute('stateless');
  }

  // tcp_options - computed: true, optional: false, required: true
  public get tcpOptions() {
    return 'not implemented' as any;
  }

  // udp_options - computed: true, optional: false, required: true
  public get udpOptions() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreSecurityListsSecurityListsIngressSecurityRulesIcmpOptions extends ComplexComputedList {

  // code - computed: true, optional: false, required: true
  public get code() {
    return this.getNumberAttribute('code');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getNumberAttribute('type');
  }
}
export class DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptionsSourcePortRange extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreSecurityListsSecurityListsIngressSecurityRulesTcpOptions extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }

  // source_port_range - computed: true, optional: false, required: true
  public get sourcePortRange() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptionsSourcePortRange extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }
}
export class DataOciCoreSecurityListsSecurityListsIngressSecurityRulesUdpOptions extends ComplexComputedList {

  // max - computed: true, optional: false, required: true
  public get max() {
    return this.getNumberAttribute('max');
  }

  // min - computed: true, optional: false, required: true
  public get min() {
    return this.getNumberAttribute('min');
  }

  // source_port_range - computed: true, optional: false, required: true
  public get sourcePortRange() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreSecurityListsSecurityListsIngressSecurityRules extends ComplexComputedList {

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // icmp_options - computed: true, optional: false, required: true
  public get icmpOptions() {
    return 'not implemented' as any;
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

  // udp_options - computed: true, optional: false, required: true
  public get udpOptions() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreSecurityListsSecurityLists extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // egress_security_rules - computed: true, optional: false, required: true
  public get egressSecurityRules() {
    return 'not implemented' as any;
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_security_rules - computed: true, optional: false, required: true
  public get ingressSecurityRules() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // vcn_id - computed: true, optional: false, required: true
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}
export interface DataOciCoreSecurityListsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreSecurityLists extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreSecurityListsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_security_lists',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._vcnId = config.vcnId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // security_lists - computed: true, optional: false, required: true
  public securityLists(index: string) {
    return new DataOciCoreSecurityListsSecurityLists(this, 'security_lists', index);
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // vcn_id - computed: false, optional: true, required: false
  private _vcnId?: string;
  public get vcnId() {
    return this._vcnId;
  }
  public set vcnId(value: string | undefined) {
    this._vcnId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreSecurityListsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreSecurityListsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      vcn_id: this._vcnId,
      filter: this._filter,
    };
  }
}
