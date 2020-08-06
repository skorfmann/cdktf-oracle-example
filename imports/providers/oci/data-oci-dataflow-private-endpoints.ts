// https://www.terraform.io/docs/providers/oci/r/data_oci_dataflow_private_endpoints.html
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
      "display_name_starts_with": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "owner_principal_id": {
        "type": "string",
        "optional": true
      },
      "private_endpoint_collection": {
        "type": [
          "list",
          [
            "object",
            {
              "items": [
                "list",
                [
                  "object",
                  {
                    "compartment_id": "string",
                    "defined_tags": [
                      "map",
                      "string"
                    ],
                    "description": "string",
                    "display_name": "string",
                    "dns_zones": [
                      "list",
                      "string"
                    ],
                    "freeform_tags": [
                      "map",
                      "string"
                    ],
                    "id": "string",
                    "lifecycle_details": "string",
                    "max_host_count": "number",
                    "nsg_ids": [
                      "list",
                      "string"
                    ],
                    "owner_principal_id": "string",
                    "owner_user_name": "string",
                    "state": "string",
                    "subnet_id": "string",
                    "time_created": "string",
                    "time_updated": "string"
                  }
                ]
              ]
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

export interface DataOciDataflowPrivateEndpointsConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly displayNameStartsWith?: string;
  readonly ownerPrincipalId?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciDataflowPrivateEndpointsFilter[];
}
export class DataOciDataflowPrivateEndpointsPrivateEndpointCollectionItems extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_zones - computed: true, optional: false, required: true
  public get dnsZones() {
    return this.getListAttribute('dns_zones');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_host_count - computed: true, optional: false, required: true
  public get maxHostCount() {
    return this.getNumberAttribute('max_host_count');
  }

  // nsg_ids - computed: true, optional: false, required: true
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
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

  // subnet_id - computed: true, optional: false, required: true
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: true
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}
export class DataOciDataflowPrivateEndpointsPrivateEndpointCollection extends ComplexComputedList {

  // items - computed: true, optional: false, required: true
  public get items() {
    return 'not implemented' as any;
  }
}
export interface DataOciDataflowPrivateEndpointsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDataflowPrivateEndpoints extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDataflowPrivateEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataflow_private_endpoints',
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
    this._displayNameStartsWith = config.displayNameStartsWith;
    this._ownerPrincipalId = config.ownerPrincipalId;
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

  // display_name_starts_with - computed: false, optional: true, required: false
  private _displayNameStartsWith?: string;
  public get displayNameStartsWith() {
    return this._displayNameStartsWith;
  }
  public set displayNameStartsWith(value: string | undefined) {
    this._displayNameStartsWith = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // owner_principal_id - computed: false, optional: true, required: false
  private _ownerPrincipalId?: string;
  public get ownerPrincipalId() {
    return this._ownerPrincipalId;
  }
  public set ownerPrincipalId(value: string | undefined) {
    this._ownerPrincipalId = value;
  }

  // private_endpoint_collection - computed: true, optional: false, required: true
  public privateEndpointCollection(index: string) {
    return new DataOciDataflowPrivateEndpointsPrivateEndpointCollection(this, 'private_endpoint_collection', index);
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
  private _filter?: DataOciDataflowPrivateEndpointsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDataflowPrivateEndpointsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      display_name_starts_with: this._displayNameStartsWith,
      owner_principal_id: this._ownerPrincipalId,
      state: this._state,
      filter: this._filter,
    };
  }
}
