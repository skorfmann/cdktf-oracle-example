// https://www.terraform.io/docs/providers/oci/r/database_autonomous_vm_cluster.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "available_cpus": {
        "type": "number",
        "computed": true
      },
      "available_data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "cpus_enabled": {
        "type": "number",
        "computed": true
      },
      "data_storage_size_in_tbs": {
        "type": "number",
        "computed": true
      },
      "db_node_storage_size_in_gbs": {
        "type": "number",
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
        "computed": true
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

export interface DatabaseAutonomousVmClusterConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly displayName: string;
  readonly exadataInfrastructureId: string;
  readonly freeformTags?: { [key: string]: string };
  readonly isLocalBackupEnabled?: boolean;
  readonly licenseModel?: string;
  readonly timeZone?: string;
  readonly vmClusterNetworkId: string;
  /** timeouts block */
  readonly timeouts?: DatabaseAutonomousVmClusterTimeouts;
}
export interface DatabaseAutonomousVmClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DatabaseAutonomousVmCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DatabaseAutonomousVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_autonomous_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._freeformTags = config.freeformTags;
    this._isLocalBackupEnabled = config.isLocalBackupEnabled;
    this._licenseModel = config.licenseModel;
    this._timeZone = config.timeZone;
    this._vmClusterNetworkId = config.vmClusterNetworkId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_cpus - computed: true, optional: false, required: true
  public get availableCpus() {
    return this.getNumberAttribute('available_cpus');
  }

  // available_data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get availableDataStorageSizeInTbs() {
    return this.getNumberAttribute('available_data_storage_size_in_tbs');
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }

  // cpus_enabled - computed: true, optional: false, required: true
  public get cpusEnabled() {
    return this.getNumberAttribute('cpus_enabled');
  }

  // data_storage_size_in_tbs - computed: true, optional: false, required: true
  public get dataStorageSizeInTbs() {
    return this.getNumberAttribute('data_storage_size_in_tbs');
  }

  // db_node_storage_size_in_gbs - computed: true, optional: false, required: true
  public get dbNodeStorageSizeInGbs() {
    return this.getNumberAttribute('db_node_storage_size_in_gbs');
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

  // memory_size_in_gbs - computed: true, optional: false, required: true
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
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
  private _timeouts?: DatabaseAutonomousVmClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DatabaseAutonomousVmClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      display_name: this._displayName,
      exadata_infrastructure_id: this._exadataInfrastructureId,
      freeform_tags: this._freeformTags,
      is_local_backup_enabled: this._isLocalBackupEnabled,
      license_model: this._licenseModel,
      time_zone: this._timeZone,
      vm_cluster_network_id: this._vmClusterNetworkId,
      timeouts: this._timeouts,
    };
  }
}
