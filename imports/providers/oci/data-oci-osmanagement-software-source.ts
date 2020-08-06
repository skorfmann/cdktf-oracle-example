// https://www.terraform.io/docs/providers/oci/r/data_oci_osmanagement_software_source.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arch_type": {
        "type": "string",
        "computed": true
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
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "display_name": {
        "type": "string",
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
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
        "computed": true
      },
      "maintainer_email": {
        "type": "string",
        "computed": true
      },
      "maintainer_name": {
        "type": "string",
        "computed": true
      },
      "maintainer_phone": {
        "type": "string",
        "computed": true
      },
      "packages": {
        "type": "number",
        "computed": true
      },
      "parent_id": {
        "type": "string",
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
      "software_source_id": {
        "type": "string",
        "required": true
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
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataOciOsmanagementSoftwareSourceConfig extends TerraformMetaArguments {
  readonly softwareSourceId: string;
}
export class DataOciOsmanagementSoftwareSourceAssociatedManagedInstances extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }
}

// Resource

export class DataOciOsmanagementSoftwareSource extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciOsmanagementSoftwareSourceConfig) {
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
    this._softwareSourceId = config.softwareSourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch_type - computed: true, optional: false, required: true
  public get archType() {
    return this.getStringAttribute('arch_type');
  }

  // associated_managed_instances - computed: true, optional: false, required: true
  public associatedManagedInstances(index: string) {
    return new DataOciOsmanagementSoftwareSourceAssociatedManagedInstances(this, 'associated_managed_instances', index);
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
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
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
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
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

  // software_source_id - computed: false, optional: false, required: true
  private _softwareSourceId: string;
  public get softwareSourceId() {
    return this._softwareSourceId;
  }
  public set softwareSourceId(value: string) {
    this._softwareSourceId = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      software_source_id: this._softwareSourceId,
    };
  }
}
