// https://www.terraform.io/docs/providers/oci/r/data_oci_core_instance_pools.html
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
      "instance_pools": {
        "type": [
          "list",
          [
            "object",
            {
              "actual_size": "number",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "instance_configuration_id": "string",
              "load_balancers": [
                "list",
                [
                  "object",
                  {
                    "backend_set_name": "string",
                    "id": "string",
                    "instance_pool_id": "string",
                    "load_balancer_id": "string",
                    "port": "number",
                    "state": "string",
                    "vnic_selection": "string"
                  }
                ]
              ],
              "placement_configurations": [
                "list",
                [
                  "object",
                  {
                    "availability_domain": "string",
                    "fault_domains": [
                      "list",
                      "string"
                    ],
                    "primary_subnet_id": "string",
                    "secondary_vnic_subnets": [
                      "list",
                      [
                        "object",
                        {
                          "display_name": "string",
                          "subnet_id": "string"
                        }
                      ]
                    ]
                  }
                ]
              ],
              "size": "number",
              "state": "string",
              "time_created": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
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

export interface DataOciCoreInstancePoolsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciCoreInstancePoolsFilter[];
}
export class DataOciCoreInstancePoolsInstancePoolsLoadBalancers extends ComplexComputedList {

  // backend_set_name - computed: true, optional: false, required: true
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_pool_id - computed: true, optional: false, required: true
  public get instancePoolId() {
    return this.getStringAttribute('instance_pool_id');
  }

  // load_balancer_id - computed: true, optional: false, required: true
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // vnic_selection - computed: true, optional: false, required: true
  public get vnicSelection() {
    return this.getStringAttribute('vnic_selection');
  }
}
export class DataOciCoreInstancePoolsInstancePoolsPlacementConfigurationsSecondaryVnicSubnets extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}
export class DataOciCoreInstancePoolsInstancePoolsPlacementConfigurations extends ComplexComputedList {

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // fault_domains - computed: true, optional: false, required: true
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }

  // primary_subnet_id - computed: true, optional: false, required: true
  public get primarySubnetId() {
    return this.getStringAttribute('primary_subnet_id');
  }

  // secondary_vnic_subnets - computed: true, optional: false, required: true
  public get secondaryVnicSubnets() {
    return 'not implemented' as any;
  }
}
export class DataOciCoreInstancePoolsInstancePools extends ComplexComputedList {

  // actual_size - computed: true, optional: false, required: true
  public get actualSize() {
    return this.getNumberAttribute('actual_size');
  }

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

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_configuration_id - computed: true, optional: false, required: true
  public get instanceConfigurationId() {
    return this.getStringAttribute('instance_configuration_id');
  }

  // load_balancers - computed: true, optional: false, required: true
  public get loadBalancers() {
    return 'not implemented' as any;
  }

  // placement_configurations - computed: true, optional: false, required: true
  public get placementConfigurations() {
    return 'not implemented' as any;
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciCoreInstancePoolsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreInstancePools extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreInstancePoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_pools',
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

  // instance_pools - computed: true, optional: false, required: true
  public instancePools(index: string) {
    return new DataOciCoreInstancePoolsInstancePools(this, 'instance_pools', index);
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreInstancePoolsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreInstancePoolsFilter[] | undefined) {
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
      filter: this._filter,
    };
  }
}
