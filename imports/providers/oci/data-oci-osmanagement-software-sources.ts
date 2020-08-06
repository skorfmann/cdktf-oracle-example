// https://www.terraform.io/docs/providers/oci/r/data_oci_osmanagement_software_sources.html
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
      "software_sources": {
        "type": [
          "list",
          [
            "object",
            {
              "arch_type": "string",
              "associated_managed_instances": [
                "list",
                [
                  "object",
                  {
                    "display_name": "string",
                    "id": "string"
                  }
                ]
              ],
              "checksum_type": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "description": "string",
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "gpg_key_fingerprint": "string",
              "gpg_key_id": "string",
              "gpg_key_url": "string",
              "id": "string",
              "maintainer_email": "string",
              "maintainer_name": "string",
              "maintainer_phone": "string",
              "packages": "number",
              "parent_id": "string",
              "parent_name": "string",
              "repo_type": "string",
              "state": "string",
              "status": "string",
              "url": "string"
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

export interface DataOciOsmanagementSoftwareSourcesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  /** filter block */
  readonly filter?: DataOciOsmanagementSoftwareSourcesFilter[];
}
export class DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export class DataOciOsmanagementSoftwareSourcesSoftwareSources extends ComplexComputedList {

  // arch_type - computed: true, optional: false, required: true
  public get archType() {
    return this.getStringAttribute('arch_type');
  }

  // associated_managed_instances - computed: true, optional: false, required: true
  public get associatedManagedInstances() {
    return 'not implemented' as any;
  }

  // checksum_type - computed: true, optional: false, required: true
  public get checksumType() {
    return this.getStringAttribute('checksum_type');
  }

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

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // gpg_key_fingerprint - computed: true, optional: false, required: true
  public get gpgKeyFingerprint() {
    return this.getStringAttribute('gpg_key_fingerprint');
  }

  // gpg_key_id - computed: true, optional: false, required: true
  public get gpgKeyId() {
    return this.getStringAttribute('gpg_key_id');
  }

  // gpg_key_url - computed: true, optional: false, required: true
  public get gpgKeyUrl() {
    return this.getStringAttribute('gpg_key_url');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // maintainer_email - computed: true, optional: false, required: true
  public get maintainerEmail() {
    return this.getStringAttribute('maintainer_email');
  }

  // maintainer_name - computed: true, optional: false, required: true
  public get maintainerName() {
    return this.getStringAttribute('maintainer_name');
  }

  // maintainer_phone - computed: true, optional: false, required: true
  public get maintainerPhone() {
    return this.getStringAttribute('maintainer_phone');
  }

  // packages - computed: true, optional: false, required: true
  public get packages() {
    return this.getNumberAttribute('packages');
  }

  // parent_id - computed: true, optional: false, required: true
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // parent_name - computed: true, optional: false, required: true
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }

  // repo_type - computed: true, optional: false, required: true
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // url - computed: true, optional: false, required: true
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataOciOsmanagementSoftwareSourcesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciOsmanagementSoftwareSources extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOsmanagementSoftwareSourcesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_software_sources',
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

  // software_sources - computed: true, optional: false, required: true
  public softwareSources(index: string) {
    return new DataOciOsmanagementSoftwareSourcesSoftwareSources(this, 'software_sources', index);
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
  private _filter?: DataOciOsmanagementSoftwareSourcesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciOsmanagementSoftwareSourcesFilter[] | undefined) {
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
