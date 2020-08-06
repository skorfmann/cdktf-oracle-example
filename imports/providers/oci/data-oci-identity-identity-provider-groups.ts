// https://www.terraform.io/docs/providers/oci/r/data_oci_identity_identity_provider_groups.html
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
      "identity_provider_groups": {
        "type": [
          "list",
          [
            "object",
            {
              "display_name": "string",
              "external_identifier": "string",
              "id": "string",
              "identity_provider_id": "string",
              "name": "string",
              "time_created": "string",
              "time_modified": "string"
            }
          ]
        ],
        "computed": true
      },
      "identity_provider_id": {
        "type": "string",
        "required": true
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

export interface DataOciIdentityIdentityProviderGroupsConfig extends TerraformMetaArguments {
  readonly identityProviderId: string;
  /** filter block */
  readonly filter?: DataOciIdentityIdentityProviderGroupsFilter[];
}
export class DataOciIdentityIdentityProviderGroupsIdentityProviderGroups extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_identifier - computed: true, optional: false, required: true
  public get externalIdentifier() {
    return this.getStringAttribute('external_identifier');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_id - computed: true, optional: false, required: true
  public get identityProviderId() {
    return this.getStringAttribute('identity_provider_id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_modified - computed: true, optional: false, required: true
  public get timeModified() {
    return this.getStringAttribute('time_modified');
  }
}
export interface DataOciIdentityIdentityProviderGroupsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciIdentityIdentityProviderGroups extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciIdentityIdentityProviderGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_identity_provider_groups',
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

  // identity_provider_groups - computed: true, optional: false, required: true
  public identityProviderGroups(index: string) {
    return new DataOciIdentityIdentityProviderGroupsIdentityProviderGroups(this, 'identity_provider_groups', index);
  }

  // identity_provider_id - computed: false, optional: false, required: true
  private _identityProviderId: string;
  public get identityProviderId() {
    return this._identityProviderId;
  }
  public set identityProviderId(value: string) {
    this._identityProviderId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciIdentityIdentityProviderGroupsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciIdentityIdentityProviderGroupsFilter[] | undefined) {
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
