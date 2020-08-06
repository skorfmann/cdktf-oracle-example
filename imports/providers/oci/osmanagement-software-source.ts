// https://www.terraform.io/docs/providers/oci/r/osmanagement_software_source.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arch_type": {
        "type": "string",
        "required": true
      },
      "associated_managed_instances": {
        "type": [
          "list",
          [
            "object",
            {
              "display_name": "string",
              "id": "string"
            }
          ]
        ],
        "computed": true
      },
      "checksum_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
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
      "gpg_key_fingerprint": {
        "type": "string",
        "computed": true
      },
      "gpg_key_id": {
        "type": "string",
        "computed": true
      },
      "gpg_key_url": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintainer_email": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintainer_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maintainer_phone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "packages": {
        "type": "number",
        "computed": true
      },
      "parent_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "parent_name": {
        "type": "string",
        "computed": true
      },
      "repo_type": {
        "type": "string",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "url": {
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

// Configuration

export interface OsmanagementSoftwareSourceConfig extends TerraformMetaArguments {
  readonly archType: string;
  readonly checksumType?: string;
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly description?: string;
  readonly displayName: string;
  readonly freeformTags?: { [key: string]: string };
  readonly maintainerEmail?: string;
  readonly maintainerName?: string;
  readonly maintainerPhone?: string;
  readonly parentId?: string;
  /** timeouts block */
  readonly timeouts?: OsmanagementSoftwareSourceTimeouts;
}
export class OsmanagementSoftwareSourceAssociatedManagedInstances extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface OsmanagementSoftwareSourceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class OsmanagementSoftwareSource extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OsmanagementSoftwareSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_software_source',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._archType = config.archType;
    this._checksumType = config.checksumType;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._maintainerEmail = config.maintainerEmail;
    this._maintainerName = config.maintainerName;
    this._maintainerPhone = config.maintainerPhone;
    this._parentId = config.parentId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch_type - computed: false, optional: false, required: true
  private _archType: string;
  public get archType() {
    return this._archType;
  }
  public set archType(value: string) {
    this._archType = value;
  }

  // associated_managed_instances - computed: true, optional: false, required: true
  public associatedManagedInstances(index: string) {
    return new OsmanagementSoftwareSourceAssociatedManagedInstances(this, 'associated_managed_instances', index);
  }

  // checksum_type - computed: true, optional: true, required: false
  private _checksumType?: string;
  public get checksumType() {
    return this._checksumType ?? this.getStringAttribute('checksum_type');
  }
  public set checksumType(value: string | undefined) {
    this._checksumType = value;
  }

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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // maintainer_email - computed: true, optional: true, required: false
  private _maintainerEmail?: string;
  public get maintainerEmail() {
    return this._maintainerEmail ?? this.getStringAttribute('maintainer_email');
  }
  public set maintainerEmail(value: string | undefined) {
    this._maintainerEmail = value;
  }

  // maintainer_name - computed: true, optional: true, required: false
  private _maintainerName?: string;
  public get maintainerName() {
    return this._maintainerName ?? this.getStringAttribute('maintainer_name');
  }
  public set maintainerName(value: string | undefined) {
    this._maintainerName = value;
  }

  // maintainer_phone - computed: true, optional: true, required: false
  private _maintainerPhone?: string;
  public get maintainerPhone() {
    return this._maintainerPhone ?? this.getStringAttribute('maintainer_phone');
  }
  public set maintainerPhone(value: string | undefined) {
    this._maintainerPhone = value;
  }

  // packages - computed: true, optional: false, required: true
  public get packages() {
    return this.getNumberAttribute('packages');
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string;
  public get parentId() {
    return this._parentId ?? this.getStringAttribute('parent_id');
  }
  public set parentId(value: string | undefined) {
    this._parentId = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OsmanagementSoftwareSourceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OsmanagementSoftwareSourceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      arch_type: this._archType,
      checksum_type: this._checksumType,
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      description: this._description,
      display_name: this._displayName,
      freeform_tags: this._freeformTags,
      maintainer_email: this._maintainerEmail,
      maintainer_name: this._maintainerName,
      maintainer_phone: this._maintainerPhone,
      parent_id: this._parentId,
      timeouts: this._timeouts,
    };
  }
}
