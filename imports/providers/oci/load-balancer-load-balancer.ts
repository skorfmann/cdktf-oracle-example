// https://www.terraform.io/docs/providers/oci/r/load_balancer_load_balancer.html
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
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address_details": {
        "type": [
          "list",
          [
            "object",
            {
              "ip_address": "string",
              "is_public": "bool"
            }
          ]
        ],
        "computed": true
      },
      "ip_addresses": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "ip_mode": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_private": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "network_security_group_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "shape": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "list",
          "string"
        ],
        "required": true
      },
      "system_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface LoadBalancerLoadBalancerConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly ipMode?: string;
  readonly isPrivate?: boolean;
  readonly networkSecurityGroupIds?: string[];
  readonly shape: string;
  readonly subnetIds: string[];
  /** timeouts block */
  readonly timeouts?: LoadBalancerLoadBalancerTimeouts;
}
export class LoadBalancerLoadBalancerIpAddressDetails extends ComplexComputedList {

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_public - computed: true, optional: false, required: true
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
}
export interface LoadBalancerLoadBalancerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class LoadBalancerLoadBalancer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoadBalancerLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_load_balancer_load_balancer',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._ipMode = config.ipMode;
    this._isPrivate = config.isPrivate;
    this._networkSecurityGroupIds = config.networkSecurityGroupIds;
    this._shape = config.shape;
    this._subnetIds = config.subnetIds;
    this._timeouts = config.timeouts;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address_details - computed: true, optional: false, required: true
  public ipAddressDetails(index: string) {
    return new LoadBalancerLoadBalancerIpAddressDetails(this, 'ip_address_details', index);
  }

  // ip_addresses - computed: true, optional: false, required: true
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ip_mode - computed: true, optional: true, required: false
  private _ipMode?: string;
  public get ipMode() {
    return this._ipMode ?? this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string | undefined) {
    this._ipMode = value;
  }

  // is_private - computed: true, optional: true, required: false
  private _isPrivate?: boolean;
  public get isPrivate() {
    return this._isPrivate ?? this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | undefined) {
    this._isPrivate = value;
  }

  // network_security_group_ids - computed: false, optional: true, required: false
  private _networkSecurityGroupIds?: string[];
  public get networkSecurityGroupIds() {
    return this._networkSecurityGroupIds;
  }
  public set networkSecurityGroupIds(value: string[] | undefined) {
    this._networkSecurityGroupIds = value;
  }

  // shape - computed: false, optional: false, required: true
  private _shape: string;
  public get shape() {
    return this._shape;
  }
  public set shape(value: string) {
    this._shape = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }

  // system_tags - computed: true, optional: false, required: true
  public systemTags(key: string): string {
    return new StringMap(this, 'system_tags').lookup(key);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LoadBalancerLoadBalancerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LoadBalancerLoadBalancerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      ip_mode: this._ipMode,
      is_private: this._isPrivate,
      network_security_group_ids: this._networkSecurityGroupIds,
      shape: this._shape,
      subnet_ids: this._subnetIds,
      timeouts: this._timeouts,
    };
  }
}
