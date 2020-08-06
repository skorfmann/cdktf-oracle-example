// https://www.terraform.io/docs/providers/oci/r/osmanagement_managed_instance_management.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_boot": {
        "type": "string",
        "computed": true
      },
      "last_checkin": {
        "type": "string",
        "computed": true
      },
      "managed_instance_id": {
        "type": "string",
        "required": true
      },
      "os_kernel_version": {
        "type": "string",
        "computed": true
      },
      "os_name": {
        "type": "string",
        "computed": true
      },
      "os_version": {
        "type": "string",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "updates_available": {
        "type": "number",
        "computed": true
      }
    },
    "block_types": {
      "child_software_sources": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "name": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
      },
      "managed_instance_groups": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "display_name": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "id": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        }
      },
      "parent_software_source": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "id": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "name": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          }
        },
        "max_items": 1
      },
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

export interface OsmanagementManagedInstanceManagementConfig extends TerraformMetaArguments {
  readonly managedInstanceId: string;
  /** child_software_sources block */
  readonly childSoftwareSources?: OsmanagementManagedInstanceManagementChildSoftwareSources[];
  /** managed_instance_groups block */
  readonly managedInstanceGroups?: OsmanagementManagedInstanceManagementManagedInstanceGroups[];
  /** parent_software_source block */
  readonly parentSoftwareSource?: OsmanagementManagedInstanceManagementParentSoftwareSource[];
  /** timeouts block */
  readonly timeouts?: OsmanagementManagedInstanceManagementTimeouts;
}
export interface OsmanagementManagedInstanceManagementChildSoftwareSources {
  readonly id?: string;
  readonly name?: string;
}
export interface OsmanagementManagedInstanceManagementManagedInstanceGroups {
  readonly displayName?: string;
  readonly id?: string;
}
export interface OsmanagementManagedInstanceManagementParentSoftwareSource {
  readonly id?: string;
  readonly name?: string;
}
export interface OsmanagementManagedInstanceManagementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class OsmanagementManagedInstanceManagement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OsmanagementManagedInstanceManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osmanagement_managed_instance_management',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._managedInstanceId = config.managedInstanceId;
    this._childSoftwareSources = config.childSoftwareSources;
    this._managedInstanceGroups = config.managedInstanceGroups;
    this._parentSoftwareSource = config.parentSoftwareSource;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_boot - computed: true, optional: false, required: true
  public get lastBoot() {
    return this.getStringAttribute('last_boot');
  }

  // last_checkin - computed: true, optional: false, required: true
  public get lastCheckin() {
    return this.getStringAttribute('last_checkin');
  }

  // managed_instance_id - computed: false, optional: false, required: true
  private _managedInstanceId: string;
  public get managedInstanceId() {
    return this._managedInstanceId;
  }
  public set managedInstanceId(value: string) {
    this._managedInstanceId = value;
  }

  // os_kernel_version - computed: true, optional: false, required: true
  public get osKernelVersion() {
    return this.getStringAttribute('os_kernel_version');
  }

  // os_name - computed: true, optional: false, required: true
  public get osName() {
    return this.getStringAttribute('os_name');
  }

  // os_version - computed: true, optional: false, required: true
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // updates_available - computed: true, optional: false, required: true
  public get updatesAvailable() {
    return this.getNumberAttribute('updates_available');
  }

  // child_software_sources - computed: false, optional: true, required: false
  private _childSoftwareSources?: OsmanagementManagedInstanceManagementChildSoftwareSources[];
  public get childSoftwareSources() {
    return this._childSoftwareSources;
  }
  public set childSoftwareSources(value: OsmanagementManagedInstanceManagementChildSoftwareSources[] | undefined) {
    this._childSoftwareSources = value;
  }

  // managed_instance_groups - computed: false, optional: true, required: false
  private _managedInstanceGroups?: OsmanagementManagedInstanceManagementManagedInstanceGroups[];
  public get managedInstanceGroups() {
    return this._managedInstanceGroups;
  }
  public set managedInstanceGroups(value: OsmanagementManagedInstanceManagementManagedInstanceGroups[] | undefined) {
    this._managedInstanceGroups = value;
  }

  // parent_software_source - computed: false, optional: true, required: false
  private _parentSoftwareSource?: OsmanagementManagedInstanceManagementParentSoftwareSource[];
  public get parentSoftwareSource() {
    return this._parentSoftwareSource;
  }
  public set parentSoftwareSource(value: OsmanagementManagedInstanceManagementParentSoftwareSource[] | undefined) {
    this._parentSoftwareSource = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OsmanagementManagedInstanceManagementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OsmanagementManagedInstanceManagementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_instance_id: this._managedInstanceId,
      child_software_sources: this._childSoftwareSources,
      managed_instance_groups: this._managedInstanceGroups,
      parent_software_source: this._parentSoftwareSource,
      timeouts: this._timeouts,
    };
  }
}
