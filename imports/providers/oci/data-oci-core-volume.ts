// https://www.terraform.io/docs/providers/oci/r/data_oci_core_volume.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "auto_tuned_vpus_per_gb": {
        "type": "string",
        "computed": true
      },
      "availability_domain": {
        "type": "string",
        "computed": true
      },
      "backup_policy_id": {
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
      "id": {
        "type": "string",
        "computed": true
      },
      "is_auto_tune_enabled": {
        "type": "bool",
        "computed": true
      },
      "is_hydrated": {
        "type": "bool",
        "computed": true
      },
      "kms_key_id": {
        "type": "string",
        "computed": true
      },
      "size_in_gbs": {
        "type": "string",
        "computed": true
      },
      "size_in_mbs": {
        "type": "string",
        "computed": true
      },
      "source_details": {
        "type": [
          "list",
          [
            "object",
            {
              "id": "string",
              "type": "string"
            }
          ]
        ],
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
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
      },
      "volume_backup_id": {
        "type": "string",
        "computed": true
      },
      "volume_group_id": {
        "type": "string",
        "computed": true
      },
      "volume_id": {
        "type": "string",
        "required": true
      },
      "vpus_per_gb": {
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
import { StringMap } from "cdktf";
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciCoreVolumeConfig extends TerraformMetaArguments {
  readonly volumeId: string;
}
export class DataOciCoreVolumeSourceDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}

// Resource

export class DataOciCoreVolume extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._volumeId = config.volumeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_tuned_vpus_per_gb - computed: true, optional: false, required: true
  public get autoTunedVpusPerGb() {
    return this.getStringAttribute('auto_tuned_vpus_per_gb');
  }

  // availability_domain - computed: true, optional: false, required: true
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_policy_id - computed: true, optional: false, required: true
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public definedTags(key: string): string {
    return new StringMap(this, 'defined_tags').lookup(key);
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public freeformTags(key: string): string {
    return new StringMap(this, 'freeform_tags').lookup(key);
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_auto_tune_enabled - computed: true, optional: false, required: true
  public get isAutoTuneEnabled() {
    return this.getBooleanAttribute('is_auto_tune_enabled');
  }

  // is_hydrated - computed: true, optional: false, required: true
  public get isHydrated() {
    return this.getBooleanAttribute('is_hydrated');
  }

  // kms_key_id - computed: true, optional: false, required: true
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // size_in_gbs - computed: true, optional: false, required: true
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // size_in_mbs - computed: true, optional: false, required: true
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }

  // source_details - computed: true, optional: false, required: true
  public sourceDetails(index: string) {
    return new DataOciCoreVolumeSourceDetails(this, 'source_details', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: true
  public systemTags(key: string): string {
    return new StringMap(this, 'system_tags').lookup(key);
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // volume_backup_id - computed: true, optional: false, required: true
  public get volumeBackupId() {
    return this.getStringAttribute('volume_backup_id');
  }

  // volume_group_id - computed: true, optional: false, required: true
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId: string;
  public get volumeId() {
    return this._volumeId;
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }

  // vpus_per_gb - computed: true, optional: false, required: true
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      volume_id: this._volumeId,
    };
  }
}
