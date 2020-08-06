// https://www.terraform.io/docs/providers/oci/r/dataflow_private_endpoint.html
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
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "dns_zones": {
        "type": [
          "list",
          "string"
        ],
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
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "max_host_count": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "nsg_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "owner_principal_id": {
        "type": "string",
        "computed": true
      },
      "owner_user_name": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "required": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_updated": {
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

// Configuration

export interface DataflowPrivateEndpointConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName?: string;
  readonly dnsZones: string[];
  readonly freeformTags?: { [key: string]: string };
  readonly maxHostCount?: number;
  readonly nsgIds?: string[];
  readonly subnetId: string;
  /** timeouts block */
  readonly timeouts?: DataflowPrivateEndpointTimeouts;
}
export interface DataflowPrivateEndpointTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataflowPrivateEndpoint extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataflowPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_private_endpoint',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._dnsZones = config.dnsZones;
    this._freeformTags = config.freeformTags;
    this._maxHostCount = config.maxHostCount;
    this._nsgIds = config.nsgIds;
    this._subnetId = config.subnetId;
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

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName ?? this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // dns_zones - computed: false, optional: false, required: true
  private _dnsZones: string[];
  public get dnsZones() {
    return this._dnsZones;
  }
  public set dnsZones(value: string[]) {
    this._dnsZones = value;
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

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_host_count - computed: true, optional: true, required: false
  private _maxHostCount?: number;
  public get maxHostCount() {
    return this._maxHostCount ?? this.getNumberAttribute('max_host_count');
  }
  public set maxHostCount(value: number | undefined) {
    this._maxHostCount = value;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[];
  public get nsgIds() {
    return this._nsgIds ?? this.getListAttribute('nsg_ids');
  }
  public set nsgIds(value: string[] | undefined) {
    this._nsgIds = value;
  }

  // owner_principal_id - computed: true, optional: false, required: true
  public get ownerPrincipalId() {
    return this.getStringAttribute('owner_principal_id');
  }

  // owner_user_name - computed: true, optional: false, required: true
  public get ownerUserName() {
    return this.getStringAttribute('owner_user_name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId: string;
  public get subnetId() {
    return this._subnetId;
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataflowPrivateEndpointTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataflowPrivateEndpointTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      dns_zones: this._dnsZones,
      freeform_tags: this._freeformTags,
      max_host_count: this._maxHostCount,
      nsg_ids: this._nsgIds,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
