// https://www.terraform.io/docs/providers/oci/r/data_oci_core_volumes.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_domain": {
        "type": "string",
        "optional": true
      },
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
      "state": {
        "type": "string",
        "optional": true
      },
      "volume_group_id": {
        "type": "string",
        "optional": true
      },
      "volumes": {
        "type": [
          "list",
          [
            "object",
            {
              "auto_tuned_vpus_per_gb": "string",
              "availability_domain": "string",
              "backup_policy_id": "string",
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "display_name": "string",
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "is_auto_tune_enabled": "bool",
              "is_hydrated": "bool",
              "kms_key_id": "string",
              "size_in_gbs": "string",
              "size_in_mbs": "string",
              "source_details": [
                "list",
                [
                  "object",
                  {
                    "id": "string",
                    "type": "string"
                  }
                ]
              ],
              "state": "string",
              "system_tags": [
                "map",
                "string"
              ],
              "time_created": "string",
              "volume_backup_id": "string",
              "volume_group_id": "string",
              "vpus_per_gb": "string"
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

export interface DataOciCoreVolumesConfig extends TerraformMetaArguments {
  readonly availabilityDomain?: string;
  readonly compartmentId: string;
  readonly displayName?: string;
  readonly state?: string;
  readonly volumeGroupId?: string;
  /** filter block */
  readonly filter?: DataOciCoreVolumesFilter[];
}
export class DataOciCoreVolumesVolumesSourceDetails extends ComplexComputedList {

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataOciCoreVolumesVolumes extends ComplexComputedList {

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
  public get definedTags() {
    return 'not implemented' as any;
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
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
  public get sourceDetails() {
    return 'not implemented' as any;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: true
  public get systemTags() {
    return 'not implemented' as any;
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

  // vpus_per_gb - computed: true, optional: false, required: true
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }
}
export interface DataOciCoreVolumesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreVolumes extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreVolumesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volumes',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._state = config.state;
    this._volumeGroupId = config.volumeGroupId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string;
  public get availabilityDomain() {
    return this._availabilityDomain;
  }
  public set availabilityDomain(value: string | undefined) {
    this._availabilityDomain = value;
  }

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

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // volume_group_id - computed: false, optional: true, required: false
  private _volumeGroupId?: string;
  public get volumeGroupId() {
    return this._volumeGroupId;
  }
  public set volumeGroupId(value: string | undefined) {
    this._volumeGroupId = value;
  }

  // volumes - computed: true, optional: false, required: true
  public volumes(index: string) {
    return new DataOciCoreVolumesVolumes(this, 'volumes', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreVolumesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreVolumesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: this._availabilityDomain,
      compartment_id: this._compartmentId,
      display_name: this._displayName,
      state: this._state,
      volume_group_id: this._volumeGroupId,
      filter: this._filter,
    };
  }
}
