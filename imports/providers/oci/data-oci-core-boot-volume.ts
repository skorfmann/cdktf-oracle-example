// https://www.terraform.io/docs/providers/oci/r/data_oci_core_boot_volume.html
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
      "boot_volume_id": {
        "type": "string",
        "required": true
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
      "image_id": {
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
      "volume_group_id": {
        "type": "string",
        "computed": true
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

export interface DataOciCoreBootVolumeConfig extends TerraformMetaArguments {
  readonly bootVolumeId: string;
}
export class DataOciCoreBootVolumeSourceDetails extends ComplexComputedList {

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

export class DataOciCoreBootVolume extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreBootVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_boot_volume',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bootVolumeId = config.bootVolumeId;
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

  // boot_volume_id - computed: false, optional: false, required: true
  private _bootVolumeId: string;
  public get bootVolumeId() {
    return this._bootVolumeId;
  }
  public set bootVolumeId(value: string) {
    this._bootVolumeId = value;
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

  // image_id - computed: true, optional: false, required: true
  public get imageId() {
    return this.getStringAttribute('image_id');
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
    return new DataOciCoreBootVolumeSourceDetails(this, 'source_details', index);
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

  // volume_group_id - computed: true, optional: false, required: true
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
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
      boot_volume_id: this._bootVolumeId,
    };
  }
}
