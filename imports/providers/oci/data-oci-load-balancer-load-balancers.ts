// https://www.terraform.io/docs/providers/oci/r/data_oci_load_balancer_load_balancers.html
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
      "detail": {
        "type": "string",
        "optional": true
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
      "load_balancers": {
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
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "ip_address_details": [
                "list",
                [
                  "object",
                  {
                    "ip_address": "string",
                    "is_public": "bool"
                  }
                ]
              ],
              "ip_addresses": [
                "list",
                "string"
              ],
              "ip_mode": "string",
              "is_private": "bool",
              "network_security_group_ids": [
                "list",
                "string"
              ],
              "shape": "string",
              "state": "string",
              "subnet_ids": [
                "list",
                "string"
              ],
              "system_tags": [
                "map",
                "string"
              ],
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

export interface DataOciLoadBalancerLoadBalancersConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly detail?: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciLoadBalancerLoadBalancersFilter[];
}
export class DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails extends ComplexComputedList {

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_public - computed: true, optional: false, required: true
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
}
export class DataOciLoadBalancerLoadBalancersLoadBalancers extends ComplexComputedList {

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

  // ip_address_details - computed: true, optional: false, required: true
  public get ipAddressDetails() {
    return 'not implemented' as any;
  }

  // ip_addresses - computed: true, optional: false, required: true
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ip_mode - computed: true, optional: false, required: true
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }

  // is_private - computed: true, optional: false, required: true
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // network_security_group_ids - computed: true, optional: false, required: true
  public get networkSecurityGroupIds() {
    return this.getListAttribute('network_security_group_ids');
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // system_tags - computed: true, optional: false, required: true
  public get systemTags() {
    return 'not implemented' as any;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}
export interface DataOciLoadBalancerLoadBalancersFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciLoadBalancerLoadBalancers extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciLoadBalancerLoadBalancersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_load_balancers',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._detail = config.detail;
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

  // detail - computed: false, optional: true, required: false
  private _detail?: string;
  public get detail() {
    return this._detail;
  }
  public set detail(value: string | undefined) {
    this._detail = value;
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

  // load_balancers - computed: true, optional: false, required: true
  public loadBalancers(index: string) {
    return new DataOciLoadBalancerLoadBalancersLoadBalancers(this, 'load_balancers', index);
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
  private _filter?: DataOciLoadBalancerLoadBalancersFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciLoadBalancerLoadBalancersFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      detail: this._detail,
      display_name: this._displayName,
      state: this._state,
      filter: this._filter,
    };
  }
}
