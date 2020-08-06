// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_idp_group_mappings.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity_provider_id": {
        "type": "string",
        "required": true
      },
      "idp_group_mappings": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "group_id": "string",
              "id": "string",
              "identity_provider_id": "string",
              "idp_group_name": "string",
              "inactive_state": "string",
              "state": "string",
              "time_created": "string"
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

export interface DataOciIdentityIdpGroupMappingsConfig extends TerraformMetaArguments {
  readonly identityProviderId: string;
  /** filter block */
  readonly filter?: DataOciIdentityIdpGroupMappingsFilter[];
}
export class DataOciIdentityIdpGroupMappingsIdpGroupMappings extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // group_id - computed: true, optional: false, required: true
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_id - computed: true, optional: false, required: true
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // idp_group_name - computed: true, optional: false, required: true
  public get idpGroupName() {
    return this.getStringAttribute('idp_group_name');
  }

  // inactive_state - computed: true, optional: false, required: true
  public get inactiveState() {
    return this.getStringAttribute('inactive_state');
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
export interface DataOciIdentityIdpGroupMappingsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityIdpGroupMappings extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityIdpGroupMappingsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_idp_group_mappings',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._identityProviderId = config.identityProviderId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId: string;
  public get identityProviderId() {
    return this._identityProviderId;
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }

  // idp_group_mappings - computed: true, optional: false, required: true
  public idpGroupMappings(index: string) {
    return new DataOciIdentityIdpGroupMappingsIdpGroupMappings(this, 'idp_group_mappings', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityIdpGroupMappingsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityIdpGroupMappingsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_provider_id: this._identityProviderId,
      filter: this._filter,
    };
  }
}
