// https://www.terraform.io/docs/providers/oci/r/database_vm_cluster.html
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
      "cpu_core_count": {
        "type": "number",
        "required": true
      },
      "cpus_enabled": {
        "type": "number",
        "computed": true
      },
      "data_storage_size_in_tbs": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "db_node_storage_size_in_gbs": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "display_name": {
        "type": "string",
        "required": true
      },
      "exadata_infrastructure_id": {
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
      "gi_version": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_local_backup_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "is_sparse_diskgroup_enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "last_patch_history_entry_id": {
        "type": "string",
        "computed": true
      },
      "license_model": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "lifecycle_details": {
        "type": "string",
        "computed": true
      },
      "memory_size_in_gbs": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "shape": {
        "type": "string",
        "computed": true
      },
      "ssh_public_keys": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "time_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "vm_cluster_network_id": {
        "type": "string",
        "required": true
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

export interface DatabaseVmClusterConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly cpuCoreCount: number;
  readonly dataStorageSizeInTbs?: number;
  readonly dbNodeStorageSizeInGbs?: number;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly exadataInfrastructureId: string;
  readonly freeformTags?: { [key: string]: string };
  readonly giVersion: string;
  readonly isLocalBackupEnabled?: boolean;
  readonly isSparseDiskgroupEnabled?: boolean;
  readonly licenseModel?: string;
  readonly memorySizeInGbs?: number;
  readonly sshPublicKeys: string[];
  readonly timeZone?: string;
  readonly vmClusterNetworkId: string;
  /** timeouts block */
  readonly timeouts?: DatabaseVmClusterTimeouts;
}
export interface DatabaseVmClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseVmCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._cpuCoreCount = config.cpuCoreCount;
    this._dataStorageSizeInTbs = config.dataStorageSizeInTbs;
    this._dbNodeStorageSizeInGbs = config.dbNodeStorageSizeInGbs;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._freeformTags = config.freeformTags;
    this._giVersion = config.giVersion;
    this._isLocalBackupEnabled = config.isLocalBackupEnabled;
    this._isSparseDiskgroupEnabled = config.isSparseDiskgroupEnabled;
    this._licenseModel = config.licenseModel;
    this._memorySizeInGbs = config.memorySizeInGbs;
    this._sshPublicKeys = config.sshPublicKeys;
    this._timeZone = config.timeZone;
    this._vmClusterNetworkId = config.vmClusterNetworkId;
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

  // cpu_core_count - computed: false, optional: false, required: true
  private _cpuCoreCount: number;
  public get cpuCoreCount() {
    return this._cpuCoreCount;
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }

  // cpus_enabled - computed: true, optional: false, required: true
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // data_storage_size_in_tbs - computed: true, optional: true, required: false
  private _dataStorageSizeInTbs?: number;
  public get dataStorageSizeInTbs() {
    return this._dataStorageSizeInTbs ?? this.getNumberAttribute('data_storage_size_in_tbs');
  }
  public set dataStorageSizeInTbs(value: number | undefined) {
    this._dataStorageSizeInTbs = value;
  }

  // db_node_storage_size_in_gbs - computed: true, optional: true, required: false
  private _dbNodeStorageSizeInGbs?: number;
  public get dbNodeStorageSizeInGbs() {
    return this._dbNodeStorageSizeInGbs ?? this.getNumberAttribute('db_node_storage_size_in_gbs');
  }
  public set dbNodeStorageSizeInGbs(value: number | undefined) {
    this._dbNodeStorageSizeInGbs = value;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // exadata_infrastructure_id - computed: false, optional: false, required: true
  private _exadataInfrastructureId: string;
  public get exadataInfrastructureId() {
    return this._exadataInfrastructureId;
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // gi_version - computed: false, optional: false, required: true
  private _giVersion: string;
  public get giVersion() {
    return this._giVersion;
  }
  public set giVersion(value: string) {
    this._giVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_local_backup_enabled - computed: true, optional: true, required: false
  private _isLocalBackupEnabled?: boolean;
  public get isLocalBackupEnabled() {
    return this._isLocalBackupEnabled ?? this.getBooleanAttribute('is_local_backup_enabled');
  }
  public set isLocalBackupEnabled(value: boolean | undefined) {
    this._isLocalBackupEnabled = value;
  }

  // is_sparse_diskgroup_enabled - computed: true, optional: true, required: false
  private _isSparseDiskgroupEnabled?: boolean;
  public get isSparseDiskgroupEnabled() {
    return this._isSparseDiskgroupEnabled ?? this.getBooleanAttribute('is_sparse_diskgroup_enabled');
  }
  public set isSparseDiskgroupEnabled(value: boolean | undefined) {
    this._isSparseDiskgroupEnabled = value;
  }

  // last_patch_history_entry_id - computed: true, optional: false, required: true
  public get lastPatchHistoryEntryId() {
    return this.getStringAttribute('last_patch_history_entry_id');
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string;
  public get licenseModel() {
    return this._licenseModel ?? this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string | undefined) {
    this._licenseModel = value;
  }

  // lifecycle_details - computed: true, optional: false, required: true
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // memory_size_in_gbs - computed: true, optional: true, required: false
  private _memorySizeInGbs?: number;
  public get memorySizeInGbs() {
    return this._memorySizeInGbs ?? this.getNumberAttribute('memory_size_in_gbs');
  }
  public set memorySizeInGbs(value: number | undefined) {
    this._memorySizeInGbs = value;
  }

  // shape - computed: true, optional: false, required: true
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // ssh_public_keys - computed: false, optional: false, required: true
  private _sshPublicKeys: string[];
  public get sshPublicKeys() {
    return this._sshPublicKeys;
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string;
  public get timeZone() {
    return this._timeZone ?? this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string | undefined) {
    this._timeZone = value;
  }

  // vm_cluster_network_id - computed: false, optional: false, required: true
  private _vmClusterNetworkId: string;
  public get vmClusterNetworkId() {
    return this._vmClusterNetworkId;
  }
  public set vmClusterNetworkId(value: string) {
    this._vmClusterNetworkId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatabaseVmClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseVmClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      cpu_core_count: this._cpuCoreCount,
      data_storage_size_in_tbs: this._dataStorageSizeInTbs,
      db_node_storage_size_in_gbs: this._dbNodeStorageSizeInGbs,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      exadata_infrastructure_id: this._exadataInfrastructureId,
      freeform_tags: this._freeformTags,
      gi_version: this._giVersion,
      is_local_backup_enabled: this._isLocalBackupEnabled,
      is_sparse_diskgroup_enabled: this._isSparseDiskgroupEnabled,
      license_model: this._licenseModel,
      memory_size_in_gbs: this._memorySizeInGbs,
      ssh_public_keys: this._sshPublicKeys,
      time_zone: this._timeZone,
      vm_cluster_network_id: this._vmClusterNetworkId,
      timeouts: this._timeouts,
    };
  }
}
